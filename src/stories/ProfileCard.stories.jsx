import ProfileCard from "../components/ProfileCard/ProfileCard";

/**
 * This is ProfileCard component.
 */

export default {
	title: "Card",
	component: ProfileCard,
	decorators: [
		(Story) => (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
				}}
			>
				<Story />
			</div>
		),
	],
};

const Template = (args) => <ProfileCard {...args} />;

export const ProfileCard1 = Template.bind({});

ProfileCard1.args = {
	name: "John Doe",
	occupation: "Software Engineer",
	imageUrl:
		"https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
};

export const ProfileCard2 = Template.bind({});

ProfileCard2.args = {
	name: "Jane Doe",
	occupation: "UX Engineer",
	imageUrl:
		"https://previews.123rf.com/images/gmast3r/gmast3r1411/gmast3r141100334/33865019-profile-icon-female-avatar-woman-portrait.jpg",
};
