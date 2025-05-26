import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock, AiOutlineTeam, AiOutlineUserAdd, AiOutlineUser } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart, FiCalendar, FiUser, FiLogOut } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft, BsUser, BsCreditCard, BsPerson } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';
import { MdOutlineSupervisedUserCircle } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';

// Import images
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';
import product1 from './product1.jpg';
import product2 from './product2.jpg';
import product3 from './product3.jpg';
import product4 from './product4.jpg';
import product5 from './product5.jpg';
import product6 from './product6.jpg';
import product7 from './product7.jpg';
import product8 from './product8.jpg';

// Grid Components
export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);

const customerGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.CustomerImage}
      alt="employee"
    />
    <div>
      <p>{props.CustomerName}</p>
      <p>{props.CustomerEmail}</p>
    </div>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
    <p>{props.Status}</p>
  </div>
);

// Grid Configurations
export const kanbanGrid = [
  { headerText: 'To Do', keyField: 'Open', allowToggle: true },
  { headerText: 'In Progress', keyField: 'InProgress', allowToggle: true },
  { headerText: 'Testing', keyField: 'Testing', allowToggle: true, isExpanded: false },
  { headerText: 'Done', keyField: 'Close', allowToggle: true },
];

export const customersGrid = [
  { type: 'checkbox', width: '50' },
  { headerText: 'Name', width: '150', template: customerGridImage, textAlign: 'Center' },
  { field: 'ProjectName', headerText: 'Project Name', width: '150', textAlign: 'Center' },
  { field: 'Status', headerText: 'Status', width: '130', format: 'yMd', textAlign: 'Center', template: customerGridStatus },
  { field: 'Weeks', headerText: 'Weeks', width: '100', format: 'C2', textAlign: 'Center' },
  { field: 'Budget', headerText: 'Budget', width: '100', format: 'yMd', textAlign: 'Center' },
  { field: 'Location', headerText: 'Location', width: '150', textAlign: 'Center' },
  { field: 'CustomerID', headerText: 'Customer ID', width: '120', textAlign: 'Center', isPrimaryKey: true },
];

export const employeesGrid = [
  { headerText: 'Employee', width: '150', template: gridEmployeeProfile, textAlign: 'Center' },
  { field: 'Name', headerText: '', width: '0', textAlign: 'Center' },
  { field: 'Title', headerText: 'Designation', width: '170', textAlign: 'Center' },
  { headerText: 'Country', width: '120', textAlign: 'Center', template: gridEmployeeCountry },
  { field: 'HireDate', headerText: 'Hire Date', width: '135', format: 'yMd', textAlign: 'Center' },
  { field: 'ReportsTo', headerText: 'Reports To', width: '120', textAlign: 'Center' },
  { field: 'EmployeeID', headerText: 'Employee ID', width: '125', textAlign: 'Center' },
];

// Chart Configurations
export const areaPrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'MMM yyyy',
  majorGridLines: { width: 0 },
  intervalType: 'Months',
  edgeLabelPlacement: 'Shift',
  labelStyle: { color: 'gray' },
  title: 'Month',
  titleStyle: { color: 'gray', size: '14px' },
  format: 'MMM yyyy',
  valueFormat: 'MMM yyyy',
  dateFormat: 'MMM yyyy',
  skeleton: 'MMM yyyy',
  enableTimeInterval: false,
  interval: 1,
  intervalType: 'Months',
  labelRotation: 0,
  crossesAt: 0
};

export const areaPrimaryYAxis = {
  labelFormat: '{value}',
  lineStyle: { width: 0 },
  minimum: 0,
  maximum: 1000,
  interval: 200,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: 'gray' },
};

export const barPrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  majorGridLines: { width: 0 },
};

export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: 'transparent' },
};

export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};

export const LinePrimaryYAxis = {
  labelFormat: '{value}%',
  rangePadding: 'None',
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

// Data
export const employeesData = [
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Fuller',
    EmployeeImage: avatar
  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Fuller',
    EmployeeImage: avatar2
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Fuller',
    EmployeeImage: avatar3
  }
];

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'dashboard',
        icon: <FiPieChart />,
      },
      {
        name: 'projects',
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'orders',
        icon: <FiShoppingCart />,
      },
      {
        name: 'employees',
        icon: <AiOutlineTeam />,
      },
      {
        name: 'customers',
        icon: <FiUser />,
      },
    ],
  },

  {
    title: 'Apps',
    links: [
      {
        name: 'calendar',
        icon: <FiCalendar />,
      },
      {
        name: 'kanban',
        icon: <BsKanban />,
      },
    ],
  },
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsPerson />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <BsCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
  {
    icon: <FiLogOut />,
    title: 'Logout',
    desc: 'Sign out of your account',
    iconColor: '#EF4444',
    iconBg: '#FEE2E2',
    action: 'logout',
  },
];

// Chart Data
export const areaCustomSeries = [
  {
    dataSource: [
      { x: new Date('2023-01-01'), y: 450 },
      { x: new Date('2023-02-01'), y: 520 },
      { x: new Date('2023-03-01'), y: 580 },
      { x: new Date('2023-04-01'), y: 650 },
      { x: new Date('2023-05-01'), y: 720 },
      { x: new Date('2023-06-01'), y: 780 },
      { x: new Date('2023-07-01'), y: 850 },
      { x: new Date('2023-08-01'), y: 920 },
      { x: new Date('2023-09-01'), y: 950 },
      { x: new Date('2023-10-01'), y: 980 },
      { x: new Date('2023-11-01'), y: 990 },
      { x: new Date('2023-12-01'), y: 1000 },
    ],
    xName: 'x',
    yName: 'y',
    name: 'Total Employees',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  }
];

export const barCustomSeries = [
  {
    dataSource: [
      { x: 'Eng', y: 450 },
      { x: 'Mkt', y: 200 },
      { x: 'Sales', y: 220 },
      { x: 'HR', y: 50 },
      { x: 'Fin', y: 120 },
      { x: 'Ops', y: 130 },
    ],
    xName: 'x',
    yName: 'y',
    name: 'Employees',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  }
];

export const lineCustomSeries = [
  {
    dataSource: [
      { x: new Date(2005, 0, 1), y: 2 },
      { x: new Date(2006, 0, 1), y: 3 },
      { x: new Date(2007, 0, 1), y: 6 },
      { x: new Date(2008, 0, 1), y: 8 },
      { x: new Date(2009, 0, 1), y: 7.5 },
      { x: new Date(2010, 0, 1), y: 9 },
      { x: new Date(2011, 0, 1), y: 11 },
    ],
    xName: 'x',
    yName: 'y',
    name: 'Germany',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line',
  },
  {
    dataSource: [
      { x: new Date(2005, 0, 1), y: 2.5 },
      { x: new Date(2006, 0, 1), y: 5 },
      { x: new Date(2007, 0, 1), y: 4 },
      { x: new Date(2008, 0, 1), y: 9 },
      { x: new Date(2009, 0, 1), y: 7 },
      { x: new Date(2010, 0, 1), y: 3 },
      { x: new Date(2011, 0, 1), y: 8 },
    ],
    xName: 'x',
    yName: 'y',
    name: 'France',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line',
  },
  {
    dataSource: [
      { x: new Date(2005, 0, 1), y: 3 },
      { x: new Date(2006, 0, 1), y: 4 },
      { x: new Date(2007, 0, 1), y: 5 },
      { x: new Date(2008, 0, 1), y: 7 },
      { x: new Date(2009, 0, 1), y: 5 },
      { x: new Date(2010, 0, 1), y: 7 },
      { x: new Date(2011, 0, 1), y: 9 },
    ],
    xName: 'x',
    yName: 'y',
    name: 'Italy',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line',
  },
];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 400,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  dashArray: '5,5',
  labelFormat: '{value}',
};

export const stackedCustomSeries = [
  {
    dataSource: [
      { x: 'Jan', y: 111.1 },
      { x: 'Feb', y: 127.3 },
      { x: 'Mar', y: 143.4 },
      { x: 'Apr', y: 159.9 },
      { x: 'May', y: 159.9 },
      { x: 'Jun', y: 159.9 },
      { x: 'July', y: 159.9 },
    ],
    xName: 'x',
    yName: 'y',
    name: 'Budget',
    type: 'StackingColumn',
    background: 'rgba(0, 194, 146, 0.27)',
  },
  {
    dataSource: [
      { x: 'Jan', y: 111.1 },
      { x: 'Feb', y: 127.3 },
      { x: 'Mar', y: 143.4 },
      { x: 'Apr', y: 159.9 },
      { x: 'May', y: 159.9 },
      { x: 'Jun', y: 159.9 },
      { x: 'July', y: 159.9 },
    ],
    xName: 'x',
    yName: 'y',
    name: 'Expense',
    type: 'StackingColumn',
    background: 'rgba(0, 194, 146, 0.27)',
  },
];

export const ColorMappingPrimaryXAxis = {
  valueType: 'Category',
  majorGridLines: { width: 0 },
  title: 'States',
};

export const ColorMappingPrimaryYAxis = {
  majorGridLines: { width: 0 },
  title: 'Population',
  labelFormat: '{value}%',
};

export const colorMappingData = [
  [
    { x: 'Jan', y: 6.96 },
    { x: 'Feb', y: 8.9 },
    { x: 'Mar', y: 12 },
    { x: 'Apr', y: 17.5 },
    { x: 'May', y: 22.1 },
    { x: 'June', y: 25 },
    { x: 'July', y: 29.4 },
    { x: 'Aug', y: 29.6 },
    { x: 'Sep', y: 25.8 },
    { x: 'Oct', y: 21.1 },
    { x: 'Nov', y: 15.5 },
    { x: 'Dec', y: 9.9 },
  ],
  [
    { x: 'Jan', y: 6.96 },
    { x: 'Feb', y: 8.9 },
    { x: 'Mar', y: 12 },
    { x: 'Apr', y: 17.5 },
    { x: 'May', y: 22.1 },
    { x: 'June', y: 25 },
    { x: 'July', y: 29.4 },
    { x: 'Aug', y: 29.6 },
    { x: 'Sep', y: 25.8 },
    { x: 'Oct', y: 21.1 },
    { x: 'Nov', y: 15.5 },
    { x: 'Dec', y: 9.9 },
  ],
];

export const rangeColorMapping = [
  { label: '1°C to 10°C',
    start: 1,
    end: 10,
    colors: ['#FFFF99'] },
  { label: '11°C to 20°C',
    start: 11,
    end: 20,
    colors: ['#FFA500'] },
  { label: '21°C to 30°C',
    start: 21,
    end: 30,
    colors: ['#FF0000'] },
];

export const financialChartData = [
  {
    x: new Date('2012-04-02'),
    open: 85.9757,
    high: 90.6657,
    low: 85.7685,
    close: 90.5257,
    volume: 660187068,
  },
  {
    x: new Date('2012-04-09'),
    open: 89.4471,
    high: 92,
    low: 86.2157,
    close: 86.4614,
    volume: 912634864,
  },
  {
    x: new Date('2012-04-16'),
    open: 87.1514,
    high: 88.6071,
    low: 81.4885,
    close: 81.8543,
    volume: 1221746066,
  },
  {
    x: new Date('2012-04-23'),
    open: 81.5157,
    high: 88.2857,
    low: 79.2857,
    close: 86.1428,
    volume: 965935749,
  },
  {
    x: new Date('2012-04-30'),
    open: 85.4,
    high: 85.4857,
    low: 80.7385,
    close: 80.75,
    volume: 615249063,
  },
];

export const FinancialPrimaryXAxis = {
  valueType: 'DateTime',
  minimum: new Date('2016-12-31'),
  maximum: new Date('2017-09-30'),
  crosshairLabel: {
    enable: true,
  },
  majorGridLines: { width: 0 },
};

export const FinancialPrimaryYAxis = {
  title: 'Price',
  minimum: 100,
  maximum: 180,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
};

export const pieChartData = [
  { x: 'Engineering', y: 37, text: '37%', department: 'Engineering Department', shortName: 'Eng' },
  { x: 'Marketing', y: 17, text: '17%', department: 'Marketing Department', shortName: 'Mkt' },
  { x: 'Sales', y: 19, text: '19%', department: 'Sales Department', shortName: 'Sales' },
  { x: 'HR', y: 4, text: '4%', department: 'Human Resources', shortName: 'HR' },
  { x: 'Finance', y: 11, text: '11%', department: 'Finance Department', shortName: 'Fin' },
  { x: 'Operations', y: 12, text: '12%', department: 'Operations Department', shortName: 'Ops' },
];

export const clientsData = [
  {
    CustomerID: 1001,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@example.com',
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '356',
    Budget: '$2.4k',
    Location: 'India',
    CustomerImage:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80',
  },
  {
    CustomerID: 1002,
    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@example.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '450',
    Budget: '$3.9k',
    Location: 'India',
    CustomerImage:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
  },
  {
    CustomerID: 1003,
    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@example.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    StatusBg: '#FEC90F',
    Weeks: '265',
    Budget: '$2.4k',
    Location: 'USA',
    CustomerImage:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
  },
  {
    CustomerID: 1004,
    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'christopher@example.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    Weeks: '199',
    Budget: '$5.9k',
    Location: 'USA',
    CustomerImage:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    CustomerID: 1005,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@example.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    StatusBg: '#FF5C8E',
    Weeks: '356',
    Budget: '$3.9k',
    Location: 'USA',
    CustomerImage:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
  },
  {
    CustomerID: 1006,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@example.com',
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '356',
    Budget: '$2.4k',
    Location: 'India',
    CustomerImage:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80',
  },
  {
    CustomerID: 1007,
    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@example.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '450',
    Budget: '$3.9k',
    Location: 'India',
    CustomerImage:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
  },
  {
    CustomerID: 1008,
    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@example.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    StatusBg: '#FEC90F',
    Weeks: '265',
    Budget: '$2.4k',
    Location: 'USA',
    CustomerImage:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
  },
  {
    CustomerID: 1009,
    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'christopher@example.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    StatusBg: '#8BE78B',
    Weeks: '199',
    Budget: '$5.9k',
    Location: 'USA',
    CustomerImage:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    CustomerID: 1010,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@example.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    StatusBg: '#FF5C8E',
    Weeks: '356',
    Budget: '$3.9k',
    Location: 'USA',
    CustomerImage:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
  },
];

export const EditorData = () => (
  <div>
    <h3>
      Try React
      React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.

      Online Playgrounds
      If you're interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.

      If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we'd only recommend using this for simple demos.

      Add React to a Website
      You can add React to an HTML page in one minute. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.

      Create a New React App
      When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up!

      As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how.

      Learn React
      People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach, we hope you'll find this section helpful.

      If you prefer to learn by doing, start with our practical tutorial.
      If you prefer to learn concepts step by step, start with our guide to main concepts.
      Like any unfamiliar technology, React does have a learning curve. With practice and some patience, you will get the hang of it.

      First Examples
      The React homepage contains a few small React examples with a live editor. Even if you don't know anything about React yet, try changing their code and see how it affects the result.

      React for Beginners
      If you feel that the React documentation goes at a faster pace than you're comfortable with, check out this overview of React by Tania Rascia. It introduces the most important React concepts in a detailed, beginner-friendly way. Once you're done, give the documentation another try!

      React for Designers
      If you're coming from a design background, these resources are a great place to get started.

      JavaScript Resources
      The React documentation assumes some familiarity with programming in the JavaScript language. You don't have to be an expert, but it's harder to learn both React and JavaScript at the same time.

      We recommend going through this JavaScript overview to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.
    </h3>
  </div>
);

export const kanbanData = [
  {
    Id: 1,
    Title: 'Task 1',
    Status: 'Open',
    Summary: 'Analyze the new requirements gathered from the customer.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Analyze,Customer',
    Estimate: 3.5,
    Assignee: 'Nancy Davolio',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-nancy-davolio',
  },
  {
    Id: 2,
    Title: 'Task 2',
    Status: 'InProgress',
    Summary: 'Improve application performance',
    Type: 'Improvement',
    Priority: 'Normal',
    Tags: 'Improvement',
    Estimate: 6,
    Assignee: 'Andrew Fuller',
    RankId: 1,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-normal, e-andrew-fuller',
  },
  {
    Id: 3,
    Title: 'Task 3',
    Status: 'Testing',
    Summary: 'Fix the issues reported in the IE browser.',
    Type: 'Bug',
    Priority: 'Release Breaker',
    Tags: 'IE',
    Estimate: 2.5,
    Assignee: 'Janet Leverling',
    RankId: 2,
    Color: '#E64A19',
    ClassName: 'e-bug, e-release-breaker, e-janet-leverling',
  },
  {
    Id: 4,
    Title: 'Task 4',
    Status: 'Close',
    Summary: 'Fix the issues reported by the customer.',
    Type: 'Bug',
    Priority: 'Low',
    Tags: 'Customer',
    Estimate: '3.5',
    Assignee: 'Steven walker',
    RankId: 1,
    Color: '#E64A19',
    ClassName: 'e-bug, e-low, e-steven-walker',
  },
];

export const ordersData = [
  {
    OrderID: 10248,
    CustomerID: 'VINET',
    CustomerName: 'Vinet',
    OrderDate: '1996-07-04T00:00:00.000Z',
    ShippedDate: '1996-07-16T00:00:00.000Z',
    Freight: 32.38,
    ShipName: 'Vins et alcools Chevalier',
    ShipAddress: '59 rue de l Abbaye',
    ShipCity: 'Reims',
    ShipRegion: 'CJ',
    ShipPostalCode: '51100',
    ShipCountry: 'France',
    Status: 'Delivered',
    Verified: !0,
  },
  {
    OrderID: 10249,
    CustomerID: 'TOMSP',
    CustomerName: 'Toms Spezialitäten',
    OrderDate: '1996-07-05T00:00:00.000Z',
    ShippedDate: '1996-07-10T00:00:00.000Z',
    Freight: 11.61,
    ShipName: 'Toms Spezialitäten',
    ShipAddress: 'Luisenstr. 48',
    ShipCity: 'Münster',
    ShipRegion: 'CJ',
    ShipPostalCode: '44087',
    ShipCountry: 'Germany',
    Status: 'Delivered',
    Verified: !1,
  },
  {
    OrderID: 10250,
    CustomerID: 'HANAR',
    CustomerName: 'Hanari Carnes',
    OrderDate: '1996-07-08T00:00:00.000Z',
    ShippedDate: '1996-07-12T00:00:00.000Z',
    Freight: 65.83,
    ShipName: 'Hanari Carnes',
    ShipAddress: 'Rua do Paço, 67',
    ShipCity: 'Rio de Janeiro',
    ShipRegion: 'RJ',
    ShipPostalCode: '05454-876',
    ShipCountry: 'Brazil',
    Status: 'Delivered',
    Verified: !0,
  },
  {
    OrderID: 10251,
    CustomerID: 'VICTE',
    CustomerName: 'Victuailles en stock',
    OrderDate: '1996-07-08T00:00:00.000Z',
    ShippedDate: '1996-07-15T00:00:00.000Z',
    Freight: 41.34,
    ShipName: 'Victuailles en stock',
    ShipAddress: '2, rue du Commerce',
    ShipCity: 'Lyon',
    ShipRegion: 'CJ',
    ShipPostalCode: '69004',
    ShipCountry: 'France',
    Status: 'Delivered',
    Verified: !0,
  },
  {
    OrderID: 10252,
    CustomerID: 'SUPRD',
    CustomerName: 'Suprêmes délices',
    OrderDate: '1996-07-09T00:00:00.000Z',
    ShippedDate: '1996-07-11T00:00:00.000Z',
    Freight: 51.3,
    ShipName: 'Suprêmes délices',
    ShipAddress: 'Boulevard Tirou, 255',
    ShipCity: 'Charleroi',
    ShipRegion: 'CJ',
    ShipPostalCode: 'B-6000',
    ShipCountry: 'Belgium',
    Status: 'Delivered',
    Verified: !0,
  },
];

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];

export const ordersGrid = [
  {
    headerText: 'Image',
    template: gridOrderImage,
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'OrderID',
    headerText: 'Order ID',
    editType: 'numericedit',
    width: '150',
    textAlign: 'Right',
  },
  {
    field: 'CustomerName',
    headerText: 'Customer Name',
    width: '150',
    textAlign: 'Left',
  },
  {
    field: 'TotalAmount',
    headerText: 'Total Amount',
    format: 'C2',
    textAlign: 'Right',
    editType: 'numericedit',
    width: '150',
  },
  {
    headerText: 'Status',
    template: gridOrderStatus,
    field: 'OrderDetails',
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'OrderID',
    headerText: 'Order ID',
    width: '120',
    textAlign: 'Right',
  },
  {
    field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Left',
  },
  {
    field: 'ProductID',
    headerText: 'Product ID',
    width: '120',
    textAlign: 'Right',
  },
  {
    field: 'Category',
    headerText: 'Category',
    width: '150',
    textAlign: 'Left',
  },
  {
    field: 'Quantity',
    headerText: 'Quantity',
    width: '120',
    textAlign: 'Right',
  },
  {
    field: 'Rating',
    headerText: 'Rating',
    width: '150',
    textAlign: 'Left',
  },
];

export const cartData = [
  {
    image: product5,
    name: 'butterscotch ice-cream',
    category: 'Milk product',
    price: '$250',
  },
  {
    image: product6,
    name: 'Supreme fresh tomato',
    category: 'Vegetable Item',
    price: '$450',
  },
  {
    image: product7,
    name: 'Red color candy',
    category: 'Food Item',
    price: '$190',
  },
];

export const chatData = [
  {
    image: avatar2,
    message: 'Roman Joined the Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
  },
  {
    image: avatar3,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM',
  },
  {
    image: avatar4,
    message: 'New Payment received',
    desc: 'Check your earnings',
    time: '4:39 AM',
  },
  {
    image: avatar,
    message: 'Jolly completed tasks',
    desc: 'Assign her new tasks',
    time: '1:12 AM',
  },
];

export const scheduleData = [
  {
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    Location: 'Space Center USA',
    StartTime: new Date(2021, 0, 15, 9, 30),
    EndTime: new Date(2021, 0, 15, 11, 0),
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    Location: 'Newyork City',
    StartTime: new Date(2021, 0, 15, 12, 0),
    EndTime: new Date(2021, 0, 15, 14, 0),
    CategoryColor: '#357cd2',
  },
  {
    Id: 3,
    Subject: 'Blue Moon Eclipse',
    Location: 'Space Center USA',
    StartTime: new Date(2021, 0, 15, 9, 30),
    EndTime: new Date(2021, 0, 15, 11, 0),
    CategoryColor: '#7fa900',
  },
  {
    Id: 4,
    Subject: 'Meteor Showers in 2021',
    Location: 'Space Center USA',
    StartTime: new Date(2021, 0, 15, 13, 0),
    EndTime: new Date(2021, 0, 15, 14, 30),
    CategoryColor: '#ea7a57',
  },
  {
    Id: 5,
    Subject: 'Milky Way as Melting pot',
    Location: 'Space Center USA',
    StartTime: new Date(2021, 0, 15, 12, 0),
    EndTime: new Date(2021, 0, 15, 14, 0),
    CategoryColor: '#7fa900',
  },
];

export const projectsData = [
  {
    id: 1,
    name: 'Website Redesign',
    description: 'Complete overhaul of the company website with modern design and improved UX',
    status: 'Active',
    progress: 75,
    teamLead: {
      name: 'John Doe',
      avatar: avatar
    },
    dueDate: '2024-06-15',
    budget: '$15,000',
    priority: 'High'
  },
  {
    id: 2,
    name: 'Mobile App Development',
    description: 'Development of a new mobile application for iOS and Android platforms',
    status: 'Active',
    progress: 45,
    teamLead: {
      name: 'Jane Smith',
      avatar: avatar2
    },
    dueDate: '2024-08-30',
    budget: '$25,000',
    priority: 'High'
  },
  {
    id: 3,
    name: 'Database Migration',
    description: 'Migration of legacy database to cloud infrastructure',
    status: 'Pending',
    progress: 30,
    teamLead: {
      name: 'Mike Johnson',
      avatar: avatar3
    },
    dueDate: '2024-07-20',
    budget: '$10,000',
    priority: 'Medium'
  },
  {
    id: 4,
    name: 'Security Audit',
    description: 'Comprehensive security audit and implementation of new protocols',
    status: 'Active',
    progress: 60,
    teamLead: {
      name: 'Sarah Williams',
      avatar: avatar4
    },
    dueDate: '2024-06-30',
    budget: '$8,000',
    priority: 'High'
  },
  {
    id: 5,
    name: 'Marketing Campaign',
    description: 'Q3 marketing campaign planning and execution',
    status: 'Pending',
    progress: 20,
    teamLead: {
      name: 'David Brown',
      avatar: avatar
    },
    dueDate: '2024-09-15',
    budget: '$12,000',
    priority: 'Medium'
  }
];

export const projectsGrid = [
  { field: 'id', headerText: 'ID', width: '50', textAlign: 'Center' },
  { field: 'name', headerText: 'Project Name', width: '150', textAlign: 'Left' },
  { field: 'description', headerText: 'Description', width: '200', textAlign: 'Left' },
  { field: 'status', headerText: 'Status', width: '100', textAlign: 'Center' },
  { field: 'progress', headerText: 'Progress', width: '100', textAlign: 'Center', template: (props) => `${props.progress}%` },
  { field: 'teamLead.name', headerText: 'Team Lead', width: '120', textAlign: 'Center' },
  { field: 'dueDate', headerText: 'Due Date', width: '120', textAlign: 'Center' },
  { field: 'budget', headerText: 'Budget', width: '100', textAlign: 'Center' },
  { field: 'priority', headerText: 'Priority', width: '100', textAlign: 'Center' }
]; 