import React from 'react';

interface InfoCardProps {
    icon: React.ReactElement;
    text: string;
    className: string;
}

export default function InfoCard({ icon, text, className }: InfoCardProps) {
    return (
        <div className={'flex bg-[#456] w-[310px] min-h-42 p-6 rounded-sm ' + className}>
            <div style={{ marginRight: '10px'}}>
                {icon}
            </div>
            <div className='text-wrap font-graphikRegular text-[#def]'>
                {text}
            </div>
        </div>
    );
}