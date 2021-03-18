export function Footer() {
  return (
    <div className="flex flex-col m-0">
      <div className="w-full min-w-full z-50">
        <div className="flex justify-center p-4">
          <div className="flex flex-col items-center justify-between">
            <p className="inline-flex text-black px-2 pt-6">
              Built with
              <svg
                fill="#e53e3e"
                viewBox="0 0 24 24"
                className="w-5 h-5 mx-1 pt-px text-red-600"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              2021 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}