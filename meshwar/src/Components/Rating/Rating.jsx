import React from 'react';
import { Rate } from 'antd';
import './Rating.css';


export function DisabledRating() {
    return (
        <div>
            <Rate
                defaultValue={5}
                allowHalf
                allowClear={false}
                tooltips={["Very Poor", "Poor", "Normal", "Good", "Excellent"]}
                disabled
            />
        </div>
    );
}

export function Rating() {
    return (
        <div>
            <Rate
                defaultValue={5}
                allowHalf
                allowClear={false}
                tooltips={["Very Poor", "Poor", "Normal", "Good", "Excellent"]}
                onChange={(value) => {
                    console.log("You rated as", value, "stars");
                }}
            />
        </div>
    );
}
