import { useContext, useEffect } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../context/appContext";
import axios from "axios";
import { addNotifications } from "../features/userSlice";
import "../styles/Sidebar.css";

export const altImages =
  "data:image/png;base64,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";

const Sidebar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {
    socket,
    rooms,
    setRooms,
    currentRoom,
    setCurrentRoom,
    members,
    setMembers,
    privateMemberMessage,
    setPrivateMemberMessage,
  } = useContext(AppContext);

  const joinRoom = (room, isPulic = true) => {
    if (!user) {
      alert("Please login");
    }
    socket.emit("join-room", room);
    setCurrentRoom(room);
    if (isPulic) {
      setPrivateMemberMessage(null);
    }

    //
    socket.off("notifications").on("notifications", (room) => {
      if (currentRoom !== room) dispatch(addNotifications(room));
    });
  };

  const handleRoomIds = (room1, room2) => {
    if (room1 > room2) {
      return room1 + "-" + room2;
    } else {
      return room2 + "-" + room1;
    }
  };

  const handlePrivateMemberMsg = (member) => {
    setPrivateMemberMessage(member);
    const roomId = handleRoomIds(user._id, member._id);
    joinRoom(roomId, false);
  };

  socket.off("new-user").on("new-user", (payload) => {
    setMembers(payload);
  });

  const getRooms = () => {
    axios({
      url: "myAdmin@gmail.com/rooms",
      method: "GET",
    }).then((res) => {
      setRooms(res.data);
    });
  };

  useEffect(() => {
    if (user) {
      setCurrentRoom("General");
      getRooms();
      socket.emit("join-room", "General");
      socket.emit("new-user");
    }
    /* eslint-disable */
  }, []);
  if (!user) return <></>;

  return (
    <div style={{ padding: "10px 0" }}>
      <h2>Available Rooms</h2>
      <ListGroup>
        {rooms?.map((room, index) => (
          <ListGroup.Item
            key={index}
            active={room === currentRoom}
            onClick={() => joinRoom(room)}
            style={{ cursor: "pointer" }}
          >
            {room}
            {currentRoom !== room && (
              <span className="badge rounded-pill bg-primary">
                {user.newMessages[room]}
              </span>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h2>Members</h2>
      <ListGroup>
        {members?.map((member) => {
          return (
            <ListGroup.Item
              key={member._id}
              style={{ cursor: "pointer" }}
              active={privateMemberMessage?._id === member?._id}
              onClick={() => handlePrivateMemberMsg(member)}
              disabled={member._id === user._id}
            >
              <Row>
                <Col xs={2} className="member-status">
                  <img
                    src={member.picture || altImages}
                    alt={member.name}
                    className="member-status-img"
                  />
                  {member.status === "online" ? (
                    <i className="fas fa-circle sidebar-online-status"></i>
                  ) : (
                    <i className="fas fa-circle sidebar-offline-status"></i>
                  )}
                </Col>
                <Col xs={9}>
                  {member.name}
                  {member._id === user?._id && " (You)"}
                  {member.status === "offline" ? (
                    <span className="text-danger mx-1">(Offline)</span>
                  ) : (
                    <span className="text-success mx-1">(Online)</span>
                  )}
                </Col>
                <Col xs={1}>
                  <span className="badge rounded-pill bg-primary">
                    {user.newMessages[handleRoomIds(member._id, user._id)]}
                  </span>
                </Col>
              </Row>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default Sidebar;
