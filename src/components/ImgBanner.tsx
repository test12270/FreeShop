import BannerImg from "../imgs/banner.jpg";

export default function ImgBanner() {
  return (
    <>
      <img src={BannerImg} />
      <div className="absolute bottom-8 left-8 max-w-md">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="stat-title">Total Buying</div>
            <div className="stat-value text-primary">25.6M</div>
            <div className="stat-desc">12% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary ring ring-fuchsia-500 ring-offset-fuchsia-500 rounded-full w-8 h-8">
              <img
                src="https://placeimg.com/192/192/people"
                className="rounded-full"
              />
            </div>
            <div className="stat-title">Our Users</div>
            <div className="stat-value text-secondary">2.3K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
      </div>
    </>
  );
}
