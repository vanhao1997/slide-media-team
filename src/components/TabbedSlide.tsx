import { useState } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../lib/theme';

interface Tab {
    label: string;
    color?: string;
    content: ReactNode;
}

interface TabbedSlideProps {
    tabs: Tab[];
    title?: ReactNode;
    subtitle?: string;
    activeTab?: number;
    staticMode?: boolean;
}

export function TabbedSlide({ tabs, title, subtitle, activeTab: controlledActiveTab, staticMode = false }: TabbedSlideProps) {
    const [internalActiveTab, setInternalActiveTab] = useState(0);
    const activeTab = Math.min(controlledActiveTab ?? internalActiveTab, tabs.length - 1);

    const handleTabClick = (index: number, e: React.MouseEvent) => {
        if (staticMode) return;
        e.stopPropagation();
        setInternalActiveTab(index);
    };

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: '50px 70px',
            }}
        >
            {subtitle && (
                <div
                    style={{
                        fontFamily: theme.fonts.body,
                        fontSize: theme.fontSizes.sm,
                        color: theme.colors.accent,
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        marginBottom: '8px',
                    }}
                >
                    {subtitle}
                </div>
            )}

            {title && (
                <h2
                    style={{
                        fontFamily: theme.fonts.display,
                        fontSize: theme.fontSizes['2xl'],
                        color: theme.colors.white,
                        fontWeight: 800,
                        marginBottom: '24px',
                    }}
                >
                    {title}
                </h2>
            )}

            {/* Tab/state bar */}
            <div
                style={{
                    display: 'flex',
                    gap: '4px',
                    marginBottom: '20px',
                    borderBottom: `1px solid ${theme.colors.whiteAlpha10}`,
                    paddingBottom: '0',
                }}
            >
                {staticMode ? (
                    <div
                        style={{
                            fontFamily: theme.fonts.body,
                            fontSize: theme.fontSizes.sm,
                            fontWeight: 800,
                            color: tabs[activeTab].color || theme.colors.accent,
                            background: theme.colors.whiteAlpha10,
                            borderBottom: `2px solid ${tabs[activeTab].color || theme.colors.accent}`,
                            padding: '10px 20px',
                            borderRadius: '4px 4px 0 0',
                        }}
                    >
                        {tabs[activeTab].label}
                    </div>
                ) : (
                    tabs.map((tab, i) => (
                        <button
                            key={i}
                            onClick={(e) => handleTabClick(i, e)}
                            style={{
                                fontFamily: theme.fonts.body,
                                fontSize: theme.fontSizes.sm,
                                fontWeight: activeTab === i ? 700 : 400,
                                color: activeTab === i ? (tab.color || theme.colors.accent) : theme.colors.whiteAlpha40,
                                background: activeTab === i ? theme.colors.whiteAlpha10 : 'transparent',
                                border: 'none',
                                borderBottom: activeTab === i ? `2px solid ${tab.color || theme.colors.accent}` : '2px solid transparent',
                                padding: '10px 20px',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                borderRadius: '4px 4px 0 0',
                            }}
                        >
                            {tab.label}
                        </button>
                    ))
                )}
            </div>

            {staticMode && (
                <div
                    style={{
                        fontFamily: theme.fonts.body,
                        fontSize: theme.fontSizes.xs,
                        color: theme.colors.whiteAlpha40,
                        marginTop: '-10px',
                        marginBottom: '14px',
                    }}
                >
                    Remote mode: bấm Next để sang phần tiếp theo
                </div>
            )}

            {/* Tab content */}
            <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        style={{ width: '100%', height: '100%' }}
                    >
                        {tabs[activeTab].content}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
