import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import ScrollIndicator from "../../components/scrollIndicator";
import ResponsiveContainer from "../../components/responsiveContainer"
import MenuItems from "../../components/menuItems";
import BottomNavigation from "../../components/bottomNavigator";
import PageTitle from "../../components/pageTitle";
import Paragraph from "../../components/paragraph";
import CoffeeMenu from "./coffee";
import PastryMenu from "./pastry";
import TeaMenu from "./tea";
import PastaMenu from "./pasta";


const MENU_COMPONENTS: Record<string, React.ComponentType> = {
  coffee: CoffeeMenu,
  pastry: PastryMenu,
  tea: TeaMenu,
  pasta: PastaMenu,
};

export default function MenuView() {
  const { menuType } = useParams<{ menuType: string }>();

  const normalizedKey = menuType?.toLowerCase() ?? '';

  const SelectedMenu = MENU_COMPONENTS[normalizedKey] || CoffeeMenu;

  return <SelectedMenu />
}