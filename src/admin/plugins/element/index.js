// import ElementUI from "element-ui";
import Vue from 'vue'

import {
  Button,
  Card,
  Carousel,
  Col,
  Dialog,
  Form,
  FormItem,
  Input,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  Option,
  OptionGroup,
  Pagination,
  Row,
  Select,
  Table,
  TableColumn,
  Tabs,
  TabPane,
  Image,
  Avatar,
  DatePicker,
  Header,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Submenu,
  Radio,
  RadioGroup,
  RadioButton,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Upload,

  Loading,
  Notification,
  MessageBox,
  Message
} from 'element-ui';


const ComponentsList = [
  Button,
  Card,
  Carousel,
  Col,
  Dialog,
  Form,
  FormItem,
  Input,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  Option,
  OptionGroup,
  Pagination,
  Row,
  Select,
  Table,
  TableColumn,
  Tabs,
  TabPane,
  Image,
  Avatar,
  DatePicker,
  Header,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Submenu,
  Radio,
  RadioGroup,
  RadioButton,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Upload
]

ComponentsList.forEach((item) => {
  // Vue.component(item.name, item);
  Vue.use(item);
});

Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

import "element-ui/lib/theme-chalk/index.css";