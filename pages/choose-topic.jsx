import { domAnimation, LazyMotion, m, motion } from "framer-motion";
import Link from "next/link";
import Layout from "../components/Layout";
import TopicsList from "../data/list-of-topics.json";

export default function ChooseTopic(second) {
	return (
		<Layout title="Choose topic">
			<style jsx>{`
				.linear-gradient-text {
					background: -webkit-linear-gradient(
						-90deg,
						#ffffff 59.92%,
						#c8940f 20%
					);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}
			`}</style>
			<motion.div
				className="flex flex-col items-center"
				animate={{ opacity: 1, scale: 1 }}
				initial={{ opacity: 0, scale: 0.5 }}
				transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
			>
				<h2
					className="text-[50px] font-medium linear-gradient-text"
					style={{ fontWeight: 600 }}
				>
					Which topic do you want to learn today?
				</h2>
				<div className="flex flex-col justify-center items-center space-y-6 py-7">
					{TopicsList.map((topics, index) => (
						<LazyMotion features={domAnimation}>
							<m.div
								whileHover={{ scale: 1.2 }}
								whileTap={{}}
								transition={{ type: "spring" }}
							>
								<Link
									href={`${topics.path}`}
									key={index}
									className="rounded-2xl w-[700px] h-28 p-5 flex justify-center items-center"
									style={{
										background: "rgba(255, 255, 255, 0.55)",
									}}
								>
									<div
										className="text-6xl"
										style={{
											WebkitTextFillColor: "#012363",
											fontWeight: 500,
										}}
									>
										{topics.topicName}
									</div>
								</Link>
							</m.div>
						</LazyMotion>
					))}
				</div>
			</motion.div>
		</Layout>
	);
}
