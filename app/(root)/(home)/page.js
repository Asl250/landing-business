"use client"


import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { BookOpenCheck } from 'lucide-react';

function Home() {
	return(
		<div className={" xl:mx-[15%] md:mx-[5%] mt-[30px] overflow-x-hidden"}>
			<div className={"grid lg:grid-cols-2 lg:space-x-20 py-[40px]"}>
					<div className={"md:space-y-5 max-md:mx-[10%] max-sm:mx-[5%] text-center "}>
						<p className={"max-sm:text-xl max-md:text-2xl text-3xl font-semibold ml-1"}>In hac habitasse platea dictumst.</p>
						<h1 className={"max-sm:text-4xl max-md:text-6xl text-8xl font-bold"}>Biznesni Davolash</h1>
						<p className={"text-center max-w-3xl text-md"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ante
							justo, ultricies nec justo nec, consequat tincidunt mi. Duis sit amet dapibus justo. </p>
						<Button className={"hidden lg:flex mx-auto px-20 py-8 rounded-3xl bg-gradient-to-r from-green-400 to-green-500"}>
							<p className={"text-xl mr-3 "}>Ro'yxatdan O'tish</p>
							<BookOpenCheck className={"w-[60px] h-[40px]"} />
						</Button>
					
					</div>
				<Image src={"/banner.PNG"} alt={"banner"} width={400} height={0} className={"lg:mt-[-280px] max-lg:mx-auto max-lg:mt-[-230px] md:w-[450px] max-lg:w-[500px] "} />
				<Button className={"mt-3 hidden max-lg:flex mx-auto md:px-20 py-8 px-[20%] max-sm:px-[15%] rounded-3xl bg-gradient-to-r from-green-400 to-green-500"}>
					<p className={"md:text-2xl text-xl mr-3 "}>Ro'yxatdan O'tish</p>
					<BookOpenCheck className={"md:w-[60px] md:h-[40px] w-[40px] h-[30px]"} />
				</Button>
			</div>
		</div>
	)
}

export default Home
