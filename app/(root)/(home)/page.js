"use client"


import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { BookOpenCheck, CalendarCheck, LaptopMinimal, AlarmClockCheck } from 'lucide-react';

function Home() {
	return(
		<div className={" h-full bg-no-repeat"}>
			<div className={'grid md:grid-cols-3 mb-14 mt-5 ml-[15%] max-md:space-y-5 max-md:ml-[25%]'}>
				<div className={'md:w-[70%] max-md:w-[60%] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer lg:flex block max-md:flex space-x-3 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-5'}>
					<CalendarCheck className={'w-[70px] h-[70px] max-lg:mx-[25%] max-md:mx-0'} />
					<div className={'mt-2 max-lg:text-center max-md:text-start'}>
						<p className={'max-xl:text-xl max-md:text-2xl xl:text-2xl '}>2 may</p>
						<p className={'text-sm'}>Boshlanish vaqti</p>
					</div>
				</div>
				<div className={'md:w-[70%] max-md:w-[60%] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer lg:flex block max-md:flex max space-x-3 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-5'}>
					<LaptopMinimal className={'w-[70px] h-[70px] max-lg:mx-[25%] max-md:mx-0'} />
					<div className={'mt-2'}>
						<p className={'max-xl:text-xl max-md:text-2xl xl:text-2xl'}>Onlayn</p>
						<p className={'text-sm'}>O'quv formati</p>
					</div>
				</div>
				<div className={'md:w-[70%] max-md:w-[60%] md: transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer lg:flex block max-md:flex space-x-3 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-5'}>
					<AlarmClockCheck className={'w-[70px] h-[70px] max-lg:mx-[25%] max-md:mx-0'} />
					<div className={'mt-2'}>
						<p className={'max-xl:text-xl max-md:text-2xl xl:text-2xl'}>2 oy</p>
						<p className={'text-sm'}>Davomiyligi</p>
					</div>
				</div>
			</div>
			<div className={"xl:mx-[15%] md:mx-[5%] mt-[30px] overflow-x-hidden"}>
				
				<div className={'grid lg:grid-cols-2 lg:space-x-20 py-[40px]'}>
					<div className={'mt-3    md:space-y-5 max-md:mx-[10%] max-sm:mx-[5%] text-center lg:text-start '}>
						<p className={'max-sm:text-xl max-md:text-2xl text-3xl font-semibold ml-1'}>In hac habitasse
							platea dictumst.</p>
						<h1 className={"max-sm:text-4xl max-md:text-6xl text-8xl font-bold"}>Biznesni Davolash</h1>
						<p className={"max-md:text-center max-w-3xl text-md"}>Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Cras ante
							justo, ultricies nec justo nec, consequat tincidunt mi. Duis sit amet dapibus justo. </p>
						<Button
							className={"hidden lg:flex max-md:mx-auto px-20 py-10 rounded-3xl bg-gradient-to-r from-green-400 to-green-500"}>
							<p className={"text-xl mr-3 "}>Ro'yxatdan O'tish</p>
							<BookOpenCheck className={"w-[60px] h-[40px]"} />
						</Button>
					
					</div>
					<Image src={"/banner.PNG"} alt={"banner"} width={400} height={0}
					       className={"lg:mt-[-290px] max-lg:mx-auto max-lg:mt-[-230px] md:w-[450px] max-lg:w-[500px] "} />
					<Button
						className={"mt-3 hidden max-lg:flex mx-auto md:px-20 py-10 px-[20%] max-sm:px-[15%] rounded-3xl bg-gradient-to-r from-green-400 to-green-500"}>
						<p className={"md:text-2xl text-xl mr-3 "}>Ro'yxatdan O'tish</p>
						<BookOpenCheck className={"md:w-[60px] md:h-[40px] w-[40px] h-[30px]"} />
					</Button>
				</div>
			</div>
		</div>
	
	)
}

export default Home
