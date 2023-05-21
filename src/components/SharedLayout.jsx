import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

const SharedLayout = () => {
  return (
    <>
      <Suspense fallback={<ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="pink"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
