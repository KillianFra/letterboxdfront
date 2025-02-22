import React from 'react';

interface InfoCardProps {
    icon: React.ReactElement;
    text: string;
    className: string;
}

export default function InfoCard({ icon, text, className }: InfoCardProps) {
    return (
        <div className={'flex bg-[#456] w-[calc(50%-5px)] p-6 lg:w-[calc(30%-10px)] rounded-sm box-border ' + className}>
            <div style={{ marginRight: '10px'}}>
                {icon}
            </div>
            <div className='text-wrap font-graphikRegular text-xs text-[#def]'>
                {text}
            </div>
        </div>
    );
}