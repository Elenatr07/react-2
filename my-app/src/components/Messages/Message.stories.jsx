import { Message } from "./Message";

export default {
    title: "Message",
    component: Message,
};

const Template = (arg) => <Message {...arg} />;

export const StoryMessage = Template.bind({});
StoryMessage.args = {
    children: " ",
};