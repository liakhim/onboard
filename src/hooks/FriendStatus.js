import React, {useState} from "react";
export default function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);

    return friendID === '1';
}
