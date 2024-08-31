import { enqueueSnackbar } from 'notistack';
import {
  
  ArrowBack,
  AddToQueue,
  Search,
  Add,
  Boy,
  AccessTimeFilledTwoTone,
  Error,
  ArrowCircleUpRounded,
  ThumbUp,
} from '@mui/icons-material';
import SnackbarProvider from './organisms/SnackbarProvider';
import { ThemeProvider } from '@mui/material/styles';
import {
  Theme,
  SpeedDial,
  MenuItem,
  AppBar,
  Box,
  Select,
  Toolbar,
  Tab,
  CssBaseline,
  Divider,
  Slide,
  ListItem,
  Drawer,
  List,
  ListItemButton,
  CardContent,
  ListItemText,
  IconButton,
  Typography,
  Stack,
  InputBase,
  Paper,
  createTheme,
  Grid,
  ButtonBase,
  ToggleButton,
  ToggleButtonGroup,
  ButtonGroup
} from '@mui/material';

import { ptBR } from '@mui/material/locale';
import { SubmitHandler } from 'react-hook-form';
import { NodeTypes, ReactFlowJsonObject } from 'reactflow';

import Button from './molecules/Button';
import FixedBar from './molecules/FixedBar';
import CardGrid from './organisms/CardGrid';
import FormBoard from './organisms/FormBoard';
import DashboardTabs from './templates/DashboardTabs';
import LandscapeBoard from './templates/LandscapeBoard';
import NavBar from './organisms/NavBar';
import ContentInner from './templates/ContentInner';
import Form from './form/SmartForm';
import InputSelect from './form/inputs/InputSelect';
import InputText from './form/inputs/InputText';
import InputAutocomplete from './form/inputs/InputAutocomplete';
import SmartFormArray from './form/SmartFormArray';
import SmartFormGroup from './form/SmartFormGroup';
import Flow from './flow/Flow';
import CustomNode from './flow/CustomNode';
import LinearIndeterminate from './molecules/LinearIndeterminate';
import SideToolBar from './organisms/SideToolBar';
import ToggleButtons from './molecules/ToggleButton';
import ContinuousSlider from './molecules/ContinuousSlider';
import DashboardNavBar from './templates/DashboardNavBar';
import TextLabel from './organisms/TextLabel';


export {
  Button,
  DashboardTabs,
  DashboardNavBar,
  LandscapeBoard,
  FormBoard,
  CardGrid,
  FixedBar,
  SpeedDial,
  NavBar,
  ContentInner,
  Form,
  InputSelect,
  InputText,
  InputAutocomplete,
  SmartFormArray,
  SmartFormGroup,
  Flow,
  CustomNode,
  MenuItem,
  AppBar,
  Box,
  Select,
  Toolbar,
  Tab,
  CssBaseline,
  Divider,
  Slide,
  ListItem,
  Drawer,
  List,
  ListItemButton,
  CardContent,
  ListItemText,
  IconButton,
  Typography,
  Stack,
  Paper,
  ThemeProvider,
  InputBase,
  SnackbarProvider,
  enqueueSnackbar,
  LinearIndeterminate,
  createTheme,
  Grid,
  SideToolBar,
  AddToQueue as IconAddToQueue,
  ArrowBack as IconArrowBack,
  Search as IconSearch,
  Add as IconAdd,
  Boy as IconBoy,
  AccessTimeFilledTwoTone as IconAccessTimeFilledTwoTone,
  Error as IconError,
  ArrowCircleUpRounded as IconArrowCircleUpRounded,
  ThumbUp as IconThumbUp,
  ptBR as localePtBR,
  ButtonBase,
  ToggleButton,
  ToggleButtonGroup,
  ButtonGroup,
  ToggleButtons,
  ContinuousSlider,
  TextLabel
};
export type { NodeTypes, SubmitHandler, ReactFlowJsonObject as FlowObject, Theme };
