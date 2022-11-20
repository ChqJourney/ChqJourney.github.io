import {writable} from 'svelte/store'

export function createTimer(duration,interval,isDecrease){
	let startNum=isDecrease?duration:0
	
	const {subscribe,update,set}=writable(startNum)
	let timer
	return {
			subscribe,
			startTick:()=>{
				timer=setInterval(()=>{
					update(n=>{
						if(n<interval){
							clearInterval(timer)
							return 0
						}else{
							return isDecrease?n-interval:n+interval
						}
					})
				},interval)
			},
			stopTick:()=>{
                if(timer){
                    clearInterval(timer)
                }
			},
			reset:()=>{
				console.log('reset')
				console.log(startNum)
				if(timer){
					clearInterval(timer)
                }
				set(startNum)
			}
		
	}
}
