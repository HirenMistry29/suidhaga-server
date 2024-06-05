import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		userType: {
			type:String,
			required : true,
		},
		email: {
			type: String,
			
		},
		password: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
			unique: true,
		}
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
