import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../redux/reducer";
import { withRouter } from "react-router-dom";

const Nav = (props) => {
  useEffect(() => {
    console.log(props);
    //# comes from redux
    props.getUser();
    if (props.user.email === "") {
      props.history.push("/");
    }
  }, [props.user.email, props.location.pathname]);
  
  // useAsyncEffect(async () => {
  //   const data = await fetch(`/users/${id}`).then(res => res.json());
  //   if (!isMounted()) return;
  //   setUser(data);
  // }, [id]);

  //see the info in this site:
  // https://github.com/rauldeheer/use-async-effect


  return (
    <h1>
      {
        //# also comes from redux
        `email: ${props.user.email}
        id: ${props.user.user_id}`
      }
    </h1>
  );
};

const mapStateToProps = (reduxState) => reduxState;
  //# whatever we return here gets put on props
  

export default connect(mapStateToProps, { getUser })(withRouter(Nav));
