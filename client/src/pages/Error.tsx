import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return <div>
      Error! page not found
      <Link to="dashboard/admin/manageManagers/read" className='text-red-500'>
      dashboard
    </Link>
  </div>;
}

export default Error;
