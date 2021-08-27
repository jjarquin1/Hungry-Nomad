import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utlis/queries';
import Auth from '../../utlis/auth'


const ProfileCard = () => {
	// If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
	const { loading, data } = useQuery(QUERY_ME);
	const { profileId } = useParams();

	// Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
	// const profile = data?.User || {};
	// console.log(data)


	const profile = Auth.getProfile();
	// Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
	if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
		return <Redirect to="/profile" />;
	}

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!profile.data.username) {
		return (
			<h4>
				You need to be logged in to see your profile page. Use the navigation
				links above to sign up or log in!
			</h4>
		);
	}


	return (

		<div className="wrapper">
			<div className="top-icons">
				<i className="fas fa-long-arrow-alt-left"></i>
				<i className="fas fa-ellipsis-v"></i>
				<i className="far fa-heart"></i>
			</div>

			<div className="profile">
				<img src="https://via.placeholder.com/150" class="thumbnail" alt='stuff' />
				<div className="check"><i class="fas fa-check"></i></div>
				<h3 className="name">{`Welcome ${profile.data.username}`}</h3>
				<p className="title">Javascript Developer</p>
				<p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!</p>
				<button type="button" className="btn" >Logout</button>
			</div>

		</div>

	)
}

export default ProfileCard;