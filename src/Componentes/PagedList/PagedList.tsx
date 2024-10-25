import React, { useState, useEffect } from 'react';
import './PagedList.css';
import Share from '../ShareCards/Share';

const fetchSharesData = async (pageNumber: number, pageSize: number) => {
    const allShares = [
        { symbol: "MGLU3", longName: "Magazine Luiza S.A.", regularMarketPrice: 2.11, logoUrl: "https://s3-symbol-logo.tradingview.com/magaz-luiza-on-nm--big.svg", currency: "BRL" },
        { symbol: "GGBR4", longName: "Gerdau S.A.", regularMarketPrice: 24.36, logoUrl: "https://s3-symbol-logo.tradingview.com/gerdau--big.svg" , currency: "BRL" },
        { symbol: "ITUB4", longName: "Itaú Unibanco Holding S.A.", regularMarketPrice: 34.36, logoUrl: "https://s3-symbol-logo.tradingview.com/itau-unibanco--big.svg" , currency: "BRL" },
        { symbol: "BBDC4", longName: "Banco Bradesco S.A.", regularMarketPrice: 13.8, logoUrl: "https://s3-symbol-logo.tradingview.com/bradesco--big.svg" , currency: "BRL" },
        { symbol: "CIEL3", longName: "Cielo S.A.", regularMarketPrice: 5.43, logoUrl: "https://s3-symbol-logo.tradingview.com/cielo--big.svg" , currency: "BRL" },
        { symbol: "LREN3", longName: "Lojas Renner S.A.", regularMarketPrice: 15.28, logoUrl: "https://s3-symbol-logo.tradingview.com/lojas-renner--big.svg" , currency: "BRL" },
    ];

    const startIndex = (pageNumber - 1) * pageSize;
    const paginatedShares = allShares.slice(startIndex, startIndex + pageSize);

    return {
        data: paginatedShares,
        totalCount: allShares.length,
        pageNumber: pageNumber,
        pageSize: pageSize,
        totalPages: Math.ceil(allShares.length / pageSize),
        hasPreviousPage: pageNumber > 1,
        hasNextPage: pageNumber < Math.ceil(allShares.length / pageSize)
    };
};

const MarketPage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sharesData, setSharesData] = useState<any[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 2;

    const loadPageData = async (pageNumber: number) => {
        const result = await fetchSharesData(pageNumber, itemsPerPage);
        setSharesData(result.data);
        setTotalPages(result.totalPages);
    };

    useEffect(() => {
        loadPageData(currentPage);
    }, [currentPage]);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div>
            <h1>Informações das Ações</h1>
            <div className="card-container">
                {sharesData.map((share, index) => (
                    <Share
                        key={index}
                        logoUrl={share.logoUrl}
                        longName={share.longName}
                        symbol={share.symbol}
                        regularMarketPrice={share.regularMarketPrice} 
                        currency={share.currency}                    />
                ))}
            </div>

            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        disabled={currentPage === index + 1}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default MarketPage;