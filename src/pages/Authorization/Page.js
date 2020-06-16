import React, { useState } from 'react';
import { v1 as uuid } from 'uuid';
import { connect } from 'react-redux';
import { setName } from '../../redux/common/actions';
import { useParams } from 'react-router-dom';
const AuthorizationPage = (props) => {
  const [name, setName] = useState('');
  function create() {
    const id = uuid();
    props.history.push(`/room/${id}`);
  }
  let { roomID } = useParams();
  return (
    <div>
      <input type='text' onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          if (!roomID) create();
          props.enterName(name);
        }}
      >
        Войти
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  enterName: (name) => dispatch(setName(name)),
});
export default connect(null, mapDispatchToProps)(AuthorizationPage);
