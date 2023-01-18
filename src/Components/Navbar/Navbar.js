import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { onAuthStateChanged } from "firebase/auth"
import { auth, db, logout } from "../../Firebase/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Logo from '../../images/daemon_logo_navbar.png'
import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";

const NavBar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState("")
  const [userId, setUserId] = useState("")
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const userRef = collection(db, "users/");
  const q = query(userRef, where("uid", "==", userId));

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        let getUser = await getDocs(q);
        setUsers(getUser.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        })))
      }
    });
  })

  const fetchUserNameProfilePicture = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      setProfilePicture(data.profilePicture);
      setUserId(data.uid);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserNameProfilePicture();
  }, [user, loading]);
  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Games", path: "/gamehomepage" },
    { label: "Forum", path: "/forumhomepage" },
    { label: "About", path: "/about" }
  ];

  const menuOptionsAdmin = [
    { label: "Home", path: "/" },
    { label: "Games", path: "/gamehomepage" },
    { label: "Forum", path: "/forumhomepage" },
    { label: "About", path: "/about" },
    { label: "Admin Dashboard", path: "/admin" }
  ];
  const handleMenuSelect = (pageURL) => {
    navigate(pageURL, { replace: true });
  };

  return (
    <>
      {users.map(userA => {
        return (
          userA.role === "Admin" && (
            <>
              <Navbar isBordered variant="floating" color="inherit"
              >
                <Navbar.Toggle showIn="xs" />
                <Navbar.Brand
                  css={{
                    "@xs": {
                      w: "12%",
                    },
                  }}
                >
                  <img src={Logo} className="logo" alt="Daemon Logo" />
                  <Text b color="inherit" hideIn="xs">
                    Daemon
                  </Text>
                </Navbar.Brand>

                <Navbar.Content
                  enableCursorHighlight
                  activeColor="secondary"
                  hideIn="xs"
                  variant="highlight-rounded"
                >
                  {menuOptionsAdmin.map((opt) => (
                    <Navbar.Link
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </Navbar.Link>
                  ))}
                  <Dropdown placement="bottom-right">
                    <Dropdown.Button light>Lists</Dropdown.Button>
                    <Dropdown.Menu
                      aria-label="User menu actions"
                      color="secondary"
                      variant="light"
                      onAction={(actionKey) => console.log({ actionKey })}
                    >
                      <Dropdown.Item key="playing" textValue="Playing">
                        <Link href={`/playing/${user?.uid}`} underline="none">
                          Playing
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item key="Completed" textValue="Completed">
                        <Link href={`/completed/${user?.uid}`} underline="none">
                          Completed
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item key="OnHold" textValue="OnHold">
                        <Link href={`/on-hold/${user?.uid}`} underline="none">
                          On-Hold
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item key="Dropped" textValue="Dropped"> 
                        <Link href={`/dropped/${user?.uid}`} underline="none">
                          Dropped
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item key="PlanningToPlay" textValue="PlanningToPlay">
                        <Link href={`/planning/${user?.uid}`} underline="none">
                          Planning to play
                        </Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Navbar.Content>
                <Navbar.Content
                  css={{
                    "@xs": {
                      w: "12%",
                      jc: "flex-end",
                    },
                  }}
                >
                  <Dropdown placement="bottom-right">

                    <Dropdown.Trigger>
                      <Avatar
                        bordered
                        as="button"
                        color="secondary"
                        size="md"
                        src={profilePicture}
                      />
                    </Dropdown.Trigger>

                    <Dropdown.Menu
                      aria-label="User menu actions"
                      color="secondary"
                      onAction={(actionKey) => console.log({ actionKey })}
                    >
                      <Dropdown.Item key="profile" css={{ height: "$18" }} textValue="profileEmail">
                        <Text b color="inherit" css={{ d: "flex" }}>
                          Signed in as
                        </Text>
                        <Text b color="inherit" css={{ d: "flex" }}>
                          {userA?.email}
                        </Text>
                      </Dropdown.Item>
                      <Dropdown.Item key="settings" withDivider textValue="settings" >
                        Settings
                      </Dropdown.Item>
                      <Dropdown.Item key="my_profile" textValue="myProfile"><Link
                        color="inherit"
                        css={{
                          minWidth: "100%",
                        }}
                        href={`profile/${userA.uid}`}
                      >My Profile </Link></Dropdown.Item>
                      <Dropdown.Item key="logout" withDivider color="error" textValue="logout">
                        <Link
                          color="inherit"
                          css={{
                            minWidth: "100%",
                          }}
                          onClick={logout}
                        >Logout </Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Navbar.Content>
                <Navbar.Collapse>
                  {menuOptions.map((opt) => (
                    <Navbar.CollapseItem
                      key={opt.label}
                      activeColor="secondary"
                    >
                      <Link
                        color="inherit"
                        css={{
                          minWidth: "100%",
                        }}
                        href={opt.path}
                      >
                        {opt.label}
                      </Link>
                    </Navbar.CollapseItem>
                  ))}
                  <Navbar.CollapseItem
                    key="logout"
                    activeColor="secondary"
                  >
                    <Link
                      color="error"
                      css={{
                        minWidth: "100%",
                      }}
                      onClick={logout}
                    >Logout </Link>
                  </Navbar.CollapseItem>
                </Navbar.Collapse>
              </Navbar>
            </>
          )
        )
      })}

      {users.map(userN => {
        return (
          userN.role === "Normal" && (
            <>
              <Navbar isBordered variant="floating" color="inherit"
              >
                <Navbar.Toggle showIn="xs" />
                <Navbar.Brand
                  css={{
                    "@xs": {
                      w: "12%",
                    },
                  }}
                >
                  <img src={Logo} className="logo" alt="Daemon Logo" />
                  <Text b color="inherit" hideIn="xs">
                    Daemon
                  </Text>
                </Navbar.Brand>

                <Navbar.Content
                  enableCursorHighlight
                  activeColor="secondary"
                  hideIn="xs"
                  variant="highlight-rounded"
                >
                  {menuOptions.map((opt) => (
                    <Navbar.Link
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </Navbar.Link>
                  ))}
                   <Dropdown placement="bottom-right">
                    <Dropdown.Button light>Lists</Dropdown.Button>
                    <Dropdown.Menu
                      aria-label="User menu actions"
                      color="secondary"
                      variant="light"
                      onAction={(actionKey) => console.log({ actionKey })}
                    >
                      <Dropdown.Item key="playing" textValue="Playing">
                        <Link href={`/playing/${user?.uid}`} underline="none">
                          Playing
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item key="Completed" textValue="Completed">
                        <Link href={`/completed/${user?.uid}`} underline="none">
                          Completed
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item key="OnHold" textValue="OnHold">
                        <Link href={`/on-hold/${user?.uid}`} underline="none">
                          On-Hold
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item key="Dropped" textValue="Dropped"> 
                        <Link href={`/dropped/${user?.uid}`} underline="none">
                          Dropped
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item key="PlanningToPlay" textValue="PlanningToPlay">
                        <Link href={`/planning/${user?.uid}`} underline="none">
                          Planning to play
                        </Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Navbar.Content>
                <Navbar.Content
                  css={{
                    "@xs": {
                      w: "12%",
                      jc: "flex-end",
                    },
                  }}
                >
                  <Dropdown placement="bottom-right">

                    <Dropdown.Trigger>
                      <Avatar
                        bordered
                        as="button"
                        color="secondary"
                        size="md"
                        src={profilePicture}
                      />
                    </Dropdown.Trigger>

                    <Dropdown.Menu
                      aria-label="User menu actions"
                      color="secondary"
                      onAction={(actionKey) => console.log({ actionKey })}
                    >
                      <Dropdown.Item key="profile" css={{ height: "$18" }} textValue="profileEmail">
                        <Text b color="inherit" css={{ d: "flex" }}>
                          Signed in as
                        </Text>
                        <Text b color="inherit" css={{ d: "flex" }}>
                          {user?.email}
                        </Text>
                      </Dropdown.Item>
                      <Dropdown.Item key="settings" withDivider textValue="settings" >
                        Settings
                      </Dropdown.Item>
                      <Dropdown.Item key="my_profile" textValue="myProfile"><Link
                        color="inherit"
                        css={{
                          minWidth: "100%",
                        }}
                        href={`profile/${user?.uid}`}
                      >My Profile </Link></Dropdown.Item>
                      <Dropdown.Item key="logout" withDivider color="error" textValue="logout">
                        <Link
                          color="inherit"
                          css={{
                            minWidth: "100%",
                          }}
                          onClick={logout}
                        >Logout </Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Navbar.Content>
                <Navbar.Collapse>
                  {menuOptions.map((opt) => (
                    <Navbar.CollapseItem
                      key={opt.label}
                      activeColor="secondary"
                    >
                      <Link
                        color="inherit"
                        css={{
                          minWidth: "100%",
                        }}
                        href={opt.path}
                      >
                        {opt.label}
                      </Link>
                    </Navbar.CollapseItem>
                  ))}
                  <Navbar.CollapseItem
                    key="logout"
                    activeColor="secondary"
                  >
                    <Link
                      color="error"
                      css={{
                        minWidth: "100%",
                      }}
                      onClick={logout}
                    >Logout </Link>
                  </Navbar.CollapseItem>
                </Navbar.Collapse>
              </Navbar>
            </>
          )
        )
      })}

    </>
  );
};

export default NavBar;

