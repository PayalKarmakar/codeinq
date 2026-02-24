import { 
  Code, Smartphone, Brain, Palette, Cloud, Wrench, 
  TrendingUp, Clock, Users, DollarSign, Award,
  Building2, Heart, GraduationCap, ShoppingCart, Truck, Home, Rocket,
  Search, TestTube, Headphones
} from 'lucide-react';

const iconMap = {
  // Services
  Code,
  Smartphone,
  Brain,
  Palette,
  Cloud,
  Wrench,
  
  // Solutions & Case Studies
  TrendingUp,
  Clock,
  Users,
  DollarSign,
  Award,
  
  // Industries
  Building2,
  Heart,
  GraduationCap,
  ShoppingCart,
  Truck,
  Home,
  Rocket,
  
  // Process Steps
  Search,
  TestTube,
  Headphones,
};

export function getIcon(iconName) {
  return iconMap[iconName] || Code; // Default to Code if icon not found
}

export default iconMap;
