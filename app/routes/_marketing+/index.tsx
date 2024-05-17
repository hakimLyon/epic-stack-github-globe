import { type MetaFunction } from '@remix-run/node'
import { ClientOnly } from 'remix-utils/client-only'
import { World } from '#app/components/globe.client.tsx'
import { globeConfig, sampleArcs } from './globe.ts'

export const meta: MetaFunction = () => [{ title: 'Epic Notes' }]

export default function Index() {
	return (
		<main className="font-poppins grid h-full place-items-center">
			<div className="relative flex h-screen w-full flex-row items-center justify-center bg-white py-20 dark:bg-black md:h-auto">
				<div className="relative mx-auto h-full w-full max-w-7xl overflow-hidden px-4 md:h-[40rem]">
					<div>
						<h2
							data-heading
							className="mt-8 animate-slide-top text-center text-4xl font-medium text-foreground [animation-delay:0.3s] [animation-fill-mode:backwards] md:text-5xl xl:mt-4 xl:animate-slide-left xl:text-6xl xl:[animation-delay:0.8s] xl:[animation-fill-mode:backwards]"
						>
							<a href="https://www.epicweb.dev/stack">The Epic Stack</a>
						</h2>
						<p className="mx-auto mt-2 max-w-md text-center text-base font-normal text-neutral-700 dark:text-neutral-200 md:text-lg">
							This globe is interactive and customizable. Have fun with it, and
							don&apos;t forget to share it. :)
						</p>
					</div>
					<div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-40 w-full select-none bg-gradient-to-b from-transparent to-white dark:to-black" />
					<div className="absolute -bottom-20 z-10 h-72 w-full md:h-full">
						<ClientOnly fallback={<></>}>
							{() => <World data={sampleArcs} globeConfig={globeConfig} />}
						</ClientOnly>
					</div>
				</div>
			</div>
		</main>
	)
}
