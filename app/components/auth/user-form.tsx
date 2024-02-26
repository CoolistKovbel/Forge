"use client";

import { UpdateUserProfile } from "@/app/madlib/actions";
import { useFormState } from "react-dom";

interface ProfileCardForm {
  user: any;
}

const UserForm = ({ user }: ProfileCardForm) => {
  const UpdateUserProfileWithId = UpdateUserProfile.bind(null, user._id);
  const [state, dispatch] = useFormState(UpdateUserProfileWithId, undefined);

  return (
    <form action={dispatch}>
      {/* Update Username */}
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-600"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          // Add value and onChange handlers to bind this input to state or context
        />
      </div>

      {/* Update Email */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          // Add value and onChange handlers to bind this input to state or context
        />
      </div>

      {/* Update Password */}
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-600"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          // Add value and onChange handlers to bind this input to state or context
        />
      </div>

      {/* Update Image */}
      <div className="mb-4">
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-600"
        >
          Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          // Add value and onChange handlers to bind this input to state or context
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Update Profile
      </button>

      {state && <div>{state}</div>}
    </form>
  );
};

export default UserForm;
