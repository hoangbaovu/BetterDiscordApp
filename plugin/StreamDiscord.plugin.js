//META{"name":"StreamDiscord"}*//

class StreamDiscord {
    getName() { return "StreamDiscord"; }
    getDescription() { return "Open Stream Discord"; }
    getVersion() { return "1.0.0"; }
	getAuthor() { return "hoangbaovu"; }
	getChanges() {
		return {
			
		};
    }
    load() {}
    start() {
        (async () => {
            let r = await new Promise(r => {
                let a = [
                    [], {
                        _: (a, b, c) => r(c)
                    },
                    [
                        ["_"]
                    ]
                ];
                typeof webpackJsonp === "object" ? webpackJsonp.push(a) : webpackJsonp(...a)
            });
            delete r.m["_"];
            delete r.c["_"];
            for (let i in r.c) {
                if (r.c.hasOwnProperty(i)) {
                    let m = r.c[i].exports;
                    if (m && r.c[i].exports.isDeveloper === false) {
                        Object.defineProperty(r.c[i].exports, "isDeveloper", {
                            get: _ => true,
                            set: _ => _,
                            configurable: true
                        })
                    }
                }
            }
          })()
    }
}
