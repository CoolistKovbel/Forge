import UserProfileCard from "@/app/components/profile-card";

const Page = async () => {
  return (
    <main className="w-full min-h-screen bg-[#111] text-white p-4">
      <h2>User profile</h2>
      
      <UserProfileCard />


      <form>
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
            Image URL
          </label>
          <input
            type="text"
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
      </form>


    </main>
  );
};

export default Page;
