import { Activity, Smartphone, Zap, Globe, Layers, Layout, Newspaper } from 'lucide-react';

// VC News Images
import vcHome from '../assets/projects/vc-news/Home.png';
import vc2 from '../assets/projects/vc-news/Page 2.png';
import vc3 from '../assets/projects/vc-news/Page 3.png';
import vc4 from '../assets/projects/vc-news/Page 4.png';
import vc5 from '../assets/projects/vc-news/Page 5.png';
import vc6 from '../assets/projects/vc-news/Page 6.png';
import vc7 from '../assets/projects/vc-news/Page 7.png';
import vc8 from '../assets/projects/vc-news/Page 8.png';
import vc9 from '../assets/projects/vc-news/Page 9.png';
import vc10 from '../assets/projects/vc-news/Page 10.png';

// Events Buddy Images
import eb1 from '../assets/projects/events-buddy/1.png';
import eb2 from '../assets/projects/events-buddy/2.png';
import eb3 from '../assets/projects/events-buddy/3.png';
import eb4 from '../assets/projects/events-buddy/4.png';
import eb5 from '../assets/projects/events-buddy/5.png';
import eb7 from '../assets/projects/events-buddy/7.png';
import eb8 from '../assets/projects/events-buddy/8.png';
import eb9 from '../assets/projects/events-buddy/9.png';
import eb10 from '../assets/projects/events-buddy/10.png';

// BasketBlitz Images
import bbThumb from '../assets/projects/basket-blitz/Thumbnail.png';
import bb2 from '../assets/projects/basket-blitz/2.png';
import bb3 from '../assets/projects/basket-blitz/3.png';
import bb4 from '../assets/projects/basket-blitz/4.png';
import bb5 from '../assets/projects/basket-blitz/5.png';
import bb6 from '../assets/projects/basket-blitz/6.png';
import bb7 from '../assets/projects/basket-blitz/7.png';
import bb8 from '../assets/projects/basket-blitz/8.png';
import bb9 from '../assets/projects/basket-blitz/9.png';
import bb10 from '../assets/projects/basket-blitz/10.png';
import bb11 from '../assets/projects/basket-blitz/11.png';

// Restaurant Dashboard Images
import rd1 from '../assets/projects/restaurant-dashboard/1.png';
import rd2 from '../assets/projects/restaurant-dashboard/2.png';
import rd3 from '../assets/projects/restaurant-dashboard/3.png';
import rd4 from '../assets/projects/restaurant-dashboard/4.png';
import rd5 from '../assets/projects/restaurant-dashboard/5.png';
import rd6 from '../assets/projects/restaurant-dashboard/6.png';

// Parallax Effect Image
import parallaxThumb from '../assets/parallax-thumb.png';

export const projects = [
    {
        id: "restaurant-dashboard",
        title: "Restaurant Dashboard",
        category: "Product Design",
        description: "A comprehensive management tool for restaurant owners, streamlining orders, inventory, and staff management.",
        tags: ["Dashboard", "UI/UX Design", "SaaS"],
        color: "bg-[#417061]",
        textColor: "text-white",
        icon: <Layout size={24} />,
        span: "md:col-span-2",
        thumbnail: rd1,
        caseStudyImages: [rd1, rd2, rd3, rd4, rd5, rd6],
        longDescription: "The Restaurant Dashboard is an all-in-one solution designed to empower restaurant managers with real-time data and intuitive controls. This project focuses on simplifying complex operations through a clean, data-driven interface. Features include automated inventory tracking, dynamic table management, and deep performance analytics to help businesses thrive in a competitive market."
    },
    {
        id: "spotlight-effect",
        title: "Spotlight Effect",
        category: "Visual Interaction",
        description: "A dynamic interaction pattern designed in Figma, demonstrating how to guide user attention using 'Spotlight' effects.",
        tags: ["Figma", "Prototyping", "Interaction Design"],
        color: "bg-brand-dark/5",
        textColor: "text-brand-dark",
        icon: <Activity size={24} />,
        span: "md:col-span-1",
        // Using the user-provided Figma prototype URL
        prototypeUrl: "https://www.figma.com/proto/KIpfT5DqoQTVI4tM2oaeca/Untitled?page-id=1%3A7&node-id=35%3A169&viewport=-346%2C-725%2C0.31&scaling=contain",
        longDescription: "The Spotlight Effect is a powerful UI pattern used to focus user attention on specific elements while dimming the surroundings. This project in Figma explores how to build this interaction using Smart Animate and component properties, making it reusable and smooth for any web or mobile interface."
    },
    {
        id: "parallax-effect",
        title: "Parallax Effect",
        category: "Prototyping",
        description: "An immersive scrolling experience that creates depth and motion using parallax principles in Figma.",
        tags: ["Figma", "Smart Animate", "Motion Design"],
        color: "bg-[#0B0C15]", // Dark navy to match the space theme
        textColor: "text-white",
        icon: <Globe size={24} />,
        span: "md:col-span-1",
        prototypeUrl: "https://www.figma.com/proto/KIpfT5DqoQTVI4tM2oaeca/Untitled?page-id=1%3A18&node-id=204%3A11150&viewport=475%2C361%2C0.19&scaling=scale-down&starting-point-node-id=204%3A11150",
        longDescription: "This project explores the power of Parallax Scrolling to create a sense of depth and immersion in web interfaces. By moving background and foreground elements at different speeds, the user experiences a 3D effect that brings the narrative to life. The high-fidelity Figma prototype demonstrates smooth transitions and responsive scaling.",
        thumbnail: parallaxThumb
    },
    {
        id: "basket-blitz",
        title: "BasketBlitz",
        category: "Grocery Delivery",
        description: "A fast and intuitive grocery shopping experience designed to bring fresh essentials to your doorstep with lightning speed.",
        tags: ["Grocery App", "UI/UX Design", "Product Design"],
        color: "bg-brand-dark",
        textColor: "text-white",
        icon: <Zap size={24} />,
        span: "md:col-span-1",
        thumbnail: bbThumb,
        caseStudyImages: [bbThumb, bb2, bb3, bb4, bb5, bb6, bb7, bb8, bb9, bb10, bb11],
        longDescription: "BasketBlitz redefines the grocery shopping journey by eliminating friction and ensuring the freshest essentials reach users in record time. This project explores a high-performance delivery interface focusing on smart inventory discovery, effortless checkout, and real-time tracking. Built for the modern household, BasketBlitz combines vibrant visuals with robust functionality to make grocery shopping a delight."
    },
    {
        id: "events-buddy",
        title: "Events Buddy",
        category: "Event Planning",
        description: "Your ultimate companion for seamless event coordination, from intimate gatherings to large-scale conferences.",
        tags: ["Mobile App", "UX/UI Design", "Event Management"],
        color: "bg-[#3E0478]",
        textColor: "text-white",
        icon: <Zap size={24} />,
        span: "md:col-span-1",
        thumbnail: eb1,
        caseStudyImages: [eb1, eb2, eb3, eb4, eb5, eb7, eb8, eb9, eb10],
        longDescription: "Events Buddy is designed to take the stress out of event planning. This case study explores a holistic mobile solution that handles everything from guest invitation tracking to real-time schedule management. The interface prioritizes clarity and quick actions, ensuring that even the most complex event details are just a tap away."
    },
    {
        id: "vc-news",
        title: "VC News",
        category: "Product Design",
        description: "A comprehensive news platform for venture capital and startup insights, designed for readability and engagement.",
        tags: ["UI/UX Design", "Product Design", "Editorial"],
        color: "bg-[#F14F62]",
        textColor: "text-white",
        icon: <Newspaper size={24} />,
        span: "md:col-span-1",
        thumbnail: vcHome,
        caseStudyImages: [vcHome, vc2, vc3, vc4, vc5, vc6, vc7, vc8, vc9, vc10],
        longDescription: "VC News is a premium digital publication platform tailored for the venture capital ecosystem. The design focuses on high-density information management without sacrificing visual elegance. Key features include custom typography for enhanced readability, a sophisticated grid system for editorial layouts, and a seamless cross-device reading experience."
    },
    {
        id: "zenspace-app",
        title: "ZenSpace App",
        category: "Wellness",
        description: "A mental health platform offering personalized meditation sessions and stress management tools through a calming interface.",
        tags: ["HealthTech", "UX Research"],
        color: "bg-brand-orange",
        textColor: "text-white",
        icon: <Layers size={24} />,
        span: "md:col-span-1"
    },
    {
        id: "lumina-os",
        title: "Lumina OS",
        category: "Smart Home",
        description: "Designing the operating system of the future for integrated smart home environments, balancing complexity with ease of use.",
        tags: ["IoT", "Systems Design", "Future Tech"],
        color: "bg-brand-blue",
        textColor: "text-white",
        icon: <Layout size={24} />,
        span: "md:col-span-2"
    }


];
