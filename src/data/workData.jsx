
import { FaRegUser, FaClipboardList,  } from 'react-icons/fa';
import { PiNoteBlank } from "react-icons/pi";
import { RiSearchLine } from "react-icons/ri";

const workData = [
  {
    id: 1,
    icon: <FaRegUser />,
    title: 'Create an account',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
  },
  {
    id: 2,
    icon: <FaClipboardList />,
    title: 'Add Listing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
  },
  {
    id: 3,
    icon: <RiSearchLine />,
    title: 'Search for Listing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
  },
  {
    id: 4,
    icon: <PiNoteBlank />,
    title: 'Get exposure',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
  },
];

export default workData;
