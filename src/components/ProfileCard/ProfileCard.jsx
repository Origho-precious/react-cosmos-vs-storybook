const ProfileCard = ({imageUrl, name, occupation}) => {
	return (
		<div className="profile-card">
			<img src={imageUrl} alt="profile" />
			<div>
				<h2>{name}</h2>
				<p>{occupation}</p>
			</div>
		</div>
	);
};

export default ProfileCard;
