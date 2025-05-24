import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, TrendingUp, Target, Calendar, RefreshCw, AlertCircle } from 'lucide-react';

const StockTracker = () => {
  const [stocks, setStocks] = useState([
    {
      id: 1,
      name: 'トヨタ自動車',
      code: '7203.T',
      currentShares: 100,
      plannedShares: 50,
      targetShares: 200,
      currentPrice: 0,
      priceChange: 0,
      priceChangePercent: 0,
      acquisitionDate: '2024-01-15',
      lastUpdated: null,
      loading: false,
      error: null
    },
    {
      id: 2,
      name: 'ソフトバンクグループ',
      code: '9984.T',
      currentShares: 50,
      plannedShares: 25,
      targetShares: 100,
      currentPrice: 0,
      priceChange: 0,
      priceChangePercent: 0,
      acquisitionDate: '2024-02-01',
      lastUpdated: null,
      loading: false,
      error: null
    }
  ]);

  const [isAddingStock, setIsAddingStock] = useState(false);
  const [editingStock, setEditingStock] = useState(null);
  const [allPricesLoading, setAllPricesLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    currentShares: 0,
    plannedShares: 0,
    targetShares: 0,
    acquisitionDate: ''
  });

  // Yahoo Finance APIから株価を取得する関数
  const fetchStockPrice = async (symbol) => {
    try {
      // CORS対応のため、プロキシサービスを使用
      const response = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch stock data');
      }
      
      const data = await response.json();
      
      if (data.chart && data.chart.result && data.chart.result[0]) {
        const result = data.chart.result[0];
        const meta = result.meta;
        const currentPrice = meta.regularMarketPrice || 0;
        const previousClose = meta.previousClose || currentPrice;
        const priceChange = currentPrice - previousClose;
        const priceChangePercent = previousClose !== 0 ? (priceChange / previousClose) * 100 : 0;
        
        return {
          price: currentPrice,
          change: priceChange,
          changePercent: priceChangePercent,
          timestamp: new Date().toLocaleString('ja-JP')
        };
      }
      
      throw new Error('Invalid data format');
    } catch (error) {
      console.error('Error fetching stock price:', error);
      throw error;
    }
  };

  // 個別銘柄の株価を更新
  const updateStockPrice = async (stockId) => {
    setStocks(prev => prev.map(stock => 
      stock.id === stockId ? { ...stock, loading: true, error: null } : stock
    ));

    try {
      const stock = stocks.find(s => s.id === stockId);
      const priceData = await fetchStockPrice(stock.code);
      
      setStocks(prev => prev.map(stock => 
        stock.id === stockId ? {
          ...stock,
          currentPrice: priceData.price,
          priceChange: priceData.change,
          priceChangePercent: priceData.changePercent,
          lastUpdated: priceData.timestamp,
          loading: false,
          error: null
        } : stock
      ));
    } catch (error) {
      setStocks(prev => prev.map(stock => 
        stock.id === stockId ? {
          ...stock,
          loading: false,
          error: '価格取得に失敗しました'
        } : stock
      ));
    }
  };

  // 全銘柄の株価を一括更新
  const updateAllPrices = async () => {
    setAllPricesLoading(true);
    
    const updatePromises = stocks.map(async (stock) => {
      try {
        const priceData = await fetchStockPrice(stock.code);
        return {
          id: stock.id,
          currentPrice: priceData.price,
          priceChange: priceData.change,
          priceChangePercent: priceData.changePercent,
          lastUpdated: priceData.timestamp,
          error: null
        };
      } catch (error) {
        return {
          id: stock.id,
          error: '価格取得に失敗しました'
        };
      }
    });

    try {
      const results = await Promise.all(updatePromises);
      
      setStocks(prev => prev.map(stock => {
        const result = results.find(r => r.id === stock.id);
        return {
          ...stock,
          ...result,
          loading: false
        };
      }));
    } catch (error) {
      console.error('Error updating all prices:', error);
    }
    
    setAllPricesLoading(false);
  };

  // 初回読み込み時に全株価を取得
  useEffect(() => {
    if (stocks.length > 0) {
      updateAllPrices();
    }
  }, []); // 空の依存配列で初回のみ実行

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name.includes('Shares') ? Number(value) : value
    }));
  };

  const handleSubmit = () => {
    if (editingStock) {
      setStocks(prev => prev.map(stock => 
        stock.id === editingStock.id ? { 
          ...stock, 
          ...formData,
          currentPrice: 0,
          lastUpdated: null,
          loading: false,
          error: null
        } : stock
      ));
      setEditingStock(null);
      
      // 編集後に価格を取得
      setTimeout(() => {
        const updatedStock = stocks.find(s => s.id === editingStock.id);
        if (updatedStock) {
          updateStockPrice(editingStock.id);
        }
      }, 100);
    } else {
      const newStock = { 
        ...formData, 
        id: Date.now(),
        currentPrice: 0,
        priceChange: 0,
        priceChangePercent: 0,
        lastUpdated: null,
        loading: false,
        error: null
      };
      setStocks(prev => [...prev, newStock]);
      setIsAddingStock(false);
      
      // 新規追加後に価格を取得
      setTimeout(() => {
        updateStockPrice(newStock.id);
      }, 100);
    }
    
    setFormData({
      name: '',
      code: '',
      currentShares: 0,
      plannedShares: 0,
      targetShares: 0,
      acquisitionDate: ''
    });
  };

  const handleEdit = (stock) => {
    setEditingStock(stock);
    setFormData({
      name: stock.name,
      code: stock.code,
      currentShares: stock.currentShares,
      plannedShares: stock.plannedShares,
      targetShares: stock.targetShares,
      acquisitionDate: stock.acquisitionDate
    });
    setIsAddingStock(false);
  };

  const handleDelete = (id) => {
    setStocks(prev => prev.filter(stock => stock.id !== id));
  };

  const calculateTotalValue = (shares, price) => {
    return (shares * price).toLocaleString();
  };

  const calculateProgress = (current, target) => {
    return target > 0 ? (current / target) * 100 : 0;
  };

  const totalPortfolioValue = stocks.reduce((sum, stock) => 
    sum + (stock.currentShares * stock.currentPrice), 0
  );

  const formatPrice = (price) => {
    return price ? `¥${price.toLocaleString()}` : '¥0';
  };

  const formatPriceChange = (change, changePercent) => {
    if (!change && !changePercent) return '';
    const sign = change >= 0 ? '+' : '';
    const color = change >= 0 ? 'text-green-600' : 'text-red-600';
    return (
      <span className={`text-sm ${color}`}>
        {sign}{change.toFixed(2)} ({sign}{changePercent.toFixed(2)}%)
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              <TrendingUp className="text-blue-600" />
              株式管理アプリ
            </h1>
            <div className="text-right">
              <p className="text-sm text-gray-600">ポートフォリオ総額</p>
              <p className="text-2xl font-bold text-green-600">
                ¥{totalPortfolioValue.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setIsAddingStock(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Plus size={20} />
              株式を追加
            </button>
            <button
              onClick={updateAllPrices}
              disabled={allPricesLoading}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
            >
              <RefreshCw size={20} className={allPricesLoading ? 'animate-spin' : ''} />
              {allPricesLoading ? '更新中...' : '全価格更新'}
            </button>
          </div>
        </div>

        {(isAddingStock || editingStock) && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">
              {editingStock ? '株式を編集' : '新しい株式を追加'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  銘柄名
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  証券コード (例: 7203.T)
                </label>
                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleInputChange}
                  placeholder="7203.T"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  日本株は「.T」、米国株は何もつけません
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  現在の株数
                </label>
                <input
                  type="number"
                  name="currentShares"
                  value={formData.currentShares}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  予定取得数
                </label>
                <input
                  type="number"
                  name="plannedShares"
                  value={formData.plannedShares}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  目標株数
                </label>
                <input
                  type="number"
                  name="targetShares"
                  value={formData.targetShares}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  取得予定日
                </label>
                <input
                  type="date"
                  name="acquisitionDate"
                  value={formData.acquisitionDate}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="md:col-span-2 flex gap-2">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  {editingStock ? '更新' : '追加'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsAddingStock(false);
                    setEditingStock(null);
                    setFormData({
                      name: '',
                      code: '',
                      currentShares: 0,
                      plannedShares: 0,
                      targetShares: 0,
                      acquisitionDate: ''
                    });
                  }}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  キャンセル
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid gap-6">
          {stocks.map(stock => {
            const progress = calculateProgress(stock.currentShares, stock.targetShares);
            return (
              <div key={stock.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {stock.name}
                    </h3>
                    <p className="text-gray-600">証券コード: {stock.code}</p>
                    {stock.lastUpdated && (
                      <p className="text-xs text-gray-500">
                        最終更新: {stock.lastUpdated}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => updateStockPrice(stock.id)}
                      disabled={stock.loading}
                      className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors disabled:opacity-50"
                      title="価格を更新"
                    >
                      <RefreshCw size={16} className={stock.loading ? 'animate-spin' : ''} />
                    </button>
                    <button
                      onClick={() => handleEdit(stock)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(stock.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                {stock.error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4 flex items-center gap-2">
                    <AlertCircle size={16} className="text-red-600" />
                    <span className="text-red-700 text-sm">{stock.error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp size={16} className="text-blue-600" />
                      <span className="text-sm font-medium text-gray-700">現在株数</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-600">
                      {stock.currentShares.toLocaleString()}株
                    </p>
                    <p className="text-sm text-gray-600">
                      {formatPrice(stock.currentShares * stock.currentPrice)}
                    </p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={16} className="text-orange-600" />
                      <span className="text-sm font-medium text-gray-700">予定取得数</span>
                    </div>
                    <p className="text-2xl font-bold text-orange-600">
                      {stock.plannedShares.toLocaleString()}株
                    </p>
                    <p className="text-sm text-gray-600">
                      {formatPrice(stock.plannedShares * stock.currentPrice)}
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Target size={16} className="text-green-600" />
                      <span className="text-sm font-medium text-gray-700">目標株数</span>
                    </div>
                    <p className="text-2xl font-bold text-green-600">
                      {stock.targetShares.toLocaleString()}株
                    </p>
                    <p className="text-sm text-gray-600">
                      {formatPrice(stock.targetShares * stock.currentPrice)}
                    </p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-gray-700">現在価格</span>
                      {stock.loading && <RefreshCw size={12} className="animate-spin text-gray-500" />}
                    </div>
                    <p className="text-2xl font-bold text-purple-600">
                      {formatPrice(stock.currentPrice)}
                    </p>
                    <div className="text-sm">
                      {formatPriceChange(stock.priceChange, stock.priceChangePercent)}
                    </div>
                    {stock.acquisitionDate && (
                      <p className="text-sm text-gray-600 mt-1">
                        取得予定: {stock.acquisitionDate}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-2">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>目標達成率</span>
                    <span>{progress.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(progress, 100)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">取得後株数予定:</span>
                    <br />
                    {(stock.currentShares + stock.plannedShares).toLocaleString()}株
                  </div>
                  <div>
                    <span className="font-medium">目標まで残り:</span>
                    <br />
                    {Math.max(0, stock.targetShares - stock.currentShares).toLocaleString()}株
                  </div>
                  <div>
                    <span className="font-medium">必要投資額:</span>
                    <br />
                    {formatPrice(Math.max(0, stock.targetShares - stock.currentShares) * stock.currentPrice)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {stocks.length === 0 && (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <TrendingUp size={48} className="text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              株式が登録されていません
            </h3>
            <p className="text-gray-500 mb-4">
              「株式を追加」ボタンから最初の株式を登録してください
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StockTracker;
