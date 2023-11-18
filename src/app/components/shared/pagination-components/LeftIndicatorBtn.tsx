import React, { Component } from 'react'

interface LeftIndicatorBtnProps {
    children: React.ReactNode;
    handleDecreasePagination: () => void;
};

export default class LeftIndicatorBtn extends Component<LeftIndicatorBtnProps> {
    constructor(props: LeftIndicatorBtnProps) {
        super(props);
    };

    render() {
        return (
            <div
                onClick={this.props.handleDecreasePagination}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer">
                {this.props.children}
            </div>
        );
    };
};