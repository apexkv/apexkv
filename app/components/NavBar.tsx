'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

function NavBar({
	navItems,
	className,
}: {
	navItems: {
		name?: string;
		link: string;
		Icon?: React.ReactNode;
	}[];
	className?: string;
}) {
	return (
		<div
			className={cn(
				'flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-full border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4',
				className,
			)}
			style={{
				backdropFilter: 'blur(16px) saturate(180%)',
				backgroundColor: 'rgba(17, 25, 40, 0.75)',
				border: '1px solid rgba(255, 255, 255, 0.125)',
			}}
		>
			{navItems.map((navItem: any, idx: number) => (
				<Link
					key={`link=${idx}`}
					href={navItem.link}
					className={cn('relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500')}
				>
					{navItem.Icon && <span className="block">{navItem.Icon}</span>}
					{navItem.name && <span className=" text-sm !cursor-pointer">{navItem.name}</span>}
				</Link>
			))}
		</div>
	);
}

export default NavBar;
