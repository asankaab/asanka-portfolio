export const parent = {
    visible: { opacity: 1, y: 0, transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }, },
    hidden: { opacity: 0, y: 20 },
  }
  
export const child = {
visible: { opacity: 1, y: 0, transition: { duration: 0.4, type: "tween" } },
hidden: { opacity: 0, y: 20 ,},
}

export const viewPortVal = {once: true, amount: 0.4}