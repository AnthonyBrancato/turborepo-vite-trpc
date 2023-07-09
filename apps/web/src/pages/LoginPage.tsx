import { Heading } from 'ui';

import bgBlurryGradient from '~/assets/bg-blurry-gradient.svg';
import logo from '~/assets/logo.svg';

export function LoginPage() {
  return (
    <div
      className="h-full flex"
      style={{
        background: `url(${bgBlurryGradient}) no-repeat center center fixed`,
        backgroundSize: 'cover',
      }}
    >
      <div className="flex justify-center w-1/3 h-1/3 m-auto">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-col w-1/2 items-center m-auto mr-0 h-screen">
        <div className="bg-slate-200 h-screen w-full relative opacity-80" />
        <div className="absolute m-auto flex flex-col items-center top-1/3 h-96 w-1/2 p-4">
          <Heading as="h1">Login page</Heading>
          <form>
            <div>
              <label htmlFor="test">test</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="test">test</label>
              <input type="text" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
