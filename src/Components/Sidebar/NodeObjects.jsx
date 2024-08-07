import React from "react";
import {
  RadioButtonChecked as RadioButtonCheckedIcon,
  Mail as MailIcon,
  Chat as ChatIcon,
  NotificationsActive as NotificationsActiveIcon,
  Pending as PendingIcon,
  MultipleStop as MultipleStopIcon,
  PermContactCalendar as PermContactCalendarIcon,
  PlaylistAdd as PlaylistAddIcon,
  Schedule as ScheduleIcon,
  LabelOutlined as LabelOutlinedIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  Google as GoogleIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  CancelOutlined as CancelOutlinedIcon,
  Send as SendIcon,
  PlaylistRemoveOutlined as PlaylistRemoveOutlinedIcon,
  DoneAll as DoneAllIcon,
  Label as LabelIcon,
} from "@mui/icons-material";

const nodeObjects = [
  { id: 1, data: { label: "Start", icon: <RadioButtonCheckedIcon /> }, type: "CustomNode" },
  { id: 2, data: { label: "Email", icon: <MailIcon /> }, type: "CustomNode" },
  { id: 3, data: { label: "SMS", icon: <ChatIcon /> }, type: "CustomNode" },
  { id: 4, data: { label: "Notification", icon: <NotificationsActiveIcon /> }, type: "CustomNode" },
  { id: 5, data: { label: "Wait", icon: <PendingIcon /> }, type: "CustomNode" },
  { id: 6, data: { label: "Decision", icon: <MultipleStopIcon /> }, type: "CustomNode" },
  { id: 7, data: { label: "Webhook", icon: <MailIcon /> }, type: "CustomNode" },
  { id: 8, data: { label: "Update Contact", icon: <PermContactCalendarIcon /> }, type: "CustomNode" },
  { id: 9, data: { label: "Schedule Meeting", icon: <ScheduleIcon /> }, type: "CustomNode" },
  { id: 10, data: { label: "Slack Message", icon: <SendIcon /> }, type: "CustomNode" },
  { id: 11, data: { label: "Create Task", icon: <PlaylistAddIcon /> }, type: "CustomNode" },
  { id: 12, data: { label: "Remove Task", icon: <PlaylistRemoveOutlinedIcon /> }, type: "CustomNode" },
  { id: 13, data: { label: "Add Tag", icon: <LabelOutlinedIcon /> }, type: "CustomNode" },
  { id: 14, data: { label: "Remove Tag", icon: <LabelIcon /> }, type: "CustomNode" },
  { id: 15, data: { label: "Accept", icon: <CheckCircleOutlineIcon /> }, type: "CustomNode" },
  { id: 16, data: { label: "Reject", icon: <CancelOutlinedIcon /> }, type: "CustomNode" },
  { id: 17, data: { label: "End", icon: <DoneAllIcon /> }, type: "CustomNode" },
  { id: 18, data: { label: "Facebook", icon: <FacebookIcon /> }, type: "sourceNode" },
  { id: 19, data: { label: "LinkedIn", icon: <LinkedInIcon /> }, type: "sourceNode" },
  { id: 20, data: { label: "Instagram", icon: <InstagramIcon /> }, type: "sourceNode" },
  { id: 21, data: { label: "Google", icon: <GoogleIcon /> }, type: "sourceNode" },
];



export default nodeObjects;
