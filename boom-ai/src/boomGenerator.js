function generateBoomNumbers(maxNumber) {
        const boomNumbers = new Set();

            for (let i = 1; i <= maxNumber; i += 30) {
                    const start = i;
                            const end = Math.min(i + 29, maxNumber);

                                    let first = Math.floor(Math.random() * (end - start + 1)) + start;
                                            let second;

                                                    do {
                                                                second = Math.floor(Math.random() * (end - start + 1)) + start;
                                                                        } while (second === first);

                                                                                boomNumbers.add(first);
                                                                                        boomNumbers.add(second);
                                                                                            }

                                                                                                return Array.from(boomNumbers);
                                                                                                }

                                                                                                module.exports = { generateBoomNumbers };
