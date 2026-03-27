import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

export function Slide01() {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '60px 50px 60px 80px',
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                    style={{
                        fontFamily: theme.fonts.body,
                        fontSize: theme.fontSizes.sm,
                        color: theme.colors.accent,
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        marginBottom: '24px',
                        fontWeight: 600,
                    }}
                >
                    Internal Training
                </motion.div>

                <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={1}
                    style={{
                        fontFamily: theme.fonts.display,
                        fontSize: theme.fontSizes['5xl'],
                        fontWeight: 900,
                        color: theme.colors.white,
                        lineHeight: 1.1,
                        marginBottom: '24px',
                    }}
                >
                    MEDIA
                    <br />
                    <span style={{ color: theme.colors.accent }}>PERFORMANCE</span>
                </motion.h1>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={2}
                    style={{
                        fontFamily: theme.fonts.body,
                        fontSize: theme.fontSizes.lg,
                        color: theme.colors.whiteAlpha60,
                        maxWidth: '400px',
                        lineHeight: 1.6,
                    }}
                >
                    Kiến thức nền tảng cho Account Team
                </motion.p>
            </div>

            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                style={{
                    width: '380px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div
                    style={{
                        width: '260px',
                        height: '360px',
                        background: theme.colors.accent,
                        borderRadius: '4px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: '32px 28px',
                    }}
                >
                    <div
                        style={{
                            fontFamily: theme.fonts.body,
                            fontSize: theme.fontSizes.base,
                            color: theme.colors.bg,
                            lineHeight: 1.6,
                        }}
                    >
                        <strong>Tư vấn khách hàng</strong>
                        <br />
                        <span style={{ opacity: 0.7 }}>hiệu quả hơn</span>
                    </div>
                </div>
            </motion.div>

            <div
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '80px',
                    fontFamily: theme.fonts.display,
                    fontSize: theme.fontSizes['4xl'],
                    fontWeight: 800,
                    color: theme.colors.whiteAlpha10,
                }}
            >
                01
            </div>
        </div>
    );
}
