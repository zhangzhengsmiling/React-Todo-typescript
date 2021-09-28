import React, { useCallback, useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import { compose } from '@/utils/fp';

const B = (props: any) => {
  console.log(props);
  const { store: stateUser } = props;

  const onClick = useCallback(() => {
    stateUser.addAge();
  }, [stateUser]);

  useEffect(() => {
    stateUser.getUserInfo(2);
  }, [stateUser]);

  return (
    <div>
      <p>
        usernmae: {stateUser.name}
      </p>
      <p>
        age: {stateUser.age}
      </p>
      <p>
        hobby: {stateUser.hobby}
      </p>
      <p>
        double age: {stateUser.doubAge}
      </p>
      <p>
        <button onClick={onClick}>add age</button>
      </p>
    </div>
  )
}

export default compose(
  inject('store'),
  observer
)(B);
