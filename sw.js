self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'KEEP_ALIVE') {
        setInterval(() => self.registration.active.postMessage({type: 'PING'}), 20000);
    }
});
