import * as React from "react";
import Item from "./Item";

const transactionData = [
    {
        id: 1,
        type: "refund",
        title: "Gift Refund",
        time: "8:13 PM",
        amount: "78",
        recipient: "Sara",
        description: "coins to Sara was refunded to your coin balance",
        read: true
    },
    {
        id: 2,
        type: "purchase",
        title: "Coin Purchased",
        time: "8:13 PM",
        coins: "300",
        price: "24",
        read: true
    }
].concat(Array(3).fill(0).flatMap((_, i) => [
    {
        id: i * 2 + 3,
        type: "refund",
        title: "Gift Refund",
        time: "8:13 PM",
        amount: "78",
        recipient: "Sara",
        description: "coins to Sara was refunded to your coin balance",
        read: true
    },
    {
        id: i * 2 + 4,
        type: "purchase",
        title: "Coin Purchased",
        time: "8:13 PM",
        coins: "300",
        price: "24",
        read: true
    }
]));

function Read() {
    return (
        <div className="flex flex-col mx-auto w-full bg-white max-w-[480px]">
            <div className="flex overflow-hidden flex-col flex-1 justify-center w-full">
                <div className="flex flex-col w-full">
                    {transactionData.map((transaction) => (
                        <Item
                            key={transaction.id}
                            {...transaction}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Read;