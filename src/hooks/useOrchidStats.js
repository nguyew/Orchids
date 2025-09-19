import { useMemo } from 'react';

const useOrchidStats = (orchids) => {
    const stats = useMemo(() => {
        if (!orchids || orchids.length === 0) {
            return {
                total: 0,
                special: 0,
                natural: 0,
                totalLikes: 0,
                averageRating: 0,
                topRated: null,
                mostLiked: null,
                colorDistribution: {},
                categoryDistribution: {},
                originDistribution: {}
            };
        }

        const special = orchids.filter(o => o.isSpecial).length;
        const natural = orchids.filter(o => o.isNatural).length;
        const totalLikes = orchids.reduce((sum, o) => sum + o.numberOfLike, 0);
        const averageRating = orchids.reduce((sum, o) => sum + o.rating, 0) / orchids.length;
        
        // Find top-rated and most liked orchids
        const topRated = orchids.reduce((prev, current) => 
            (prev.rating > current.rating) ? prev : current
        );
        
        const mostLiked = orchids.reduce((prev, current) => 
            (prev.numberOfLike > current.numberOfLike) ? prev : current
        );

        // Calculate distributions
        const colorDistribution = orchids.reduce((acc, orchid) => {
            acc[orchid.color] = (acc[orchid.color] || 0) + 1;
            return acc;
        }, {});

        const categoryDistribution = orchids.reduce((acc, orchid) => {
            acc[orchid.category] = (acc[orchid.category] || 0) + 1;
            return acc;
        }, {});

        const originDistribution = orchids.reduce((acc, orchid) => {
            acc[orchid.origin] = (acc[orchid.origin] || 0) + 1;
            return acc;
        }, {});

        return {
            total: orchids.length,
            special,
            natural,
            totalLikes,
            averageRating: Math.round(averageRating * 10) / 10,
            topRated,
            mostLiked,
            colorDistribution,
            categoryDistribution,
            originDistribution
        };
    }, [orchids]);

    const getTopColors = (limit = 3) => {
        return Object.entries(stats.colorDistribution)
            .sort(([,a], [,b]) => b - a)
            .slice(0, limit)
            .map(([color, count]) => ({ color, count }));
    };

    const getTopCategories = (limit = 3) => {
        return Object.entries(stats.categoryDistribution)
            .sort(([,a], [,b]) => b - a)
            .slice(0, limit)
            .map(([category, count]) => ({ category, count }));
    };

    const getTopOrigins = (limit = 3) => {
        return Object.entries(stats.originDistribution)
            .sort(([,a], [,b]) => b - a)
            .slice(0, limit)
            .map(([origin, count]) => ({ origin, count }));
    };

    return {
        ...stats,
        getTopColors,
        getTopCategories,
        getTopOrigins
    };
};

export default useOrchidStats;