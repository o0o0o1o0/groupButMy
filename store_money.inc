<div class="container" id="store_money">
    <div class="coinTitle"><h2>夜市幣儲值</h2><div><img src="./img/store_money/money.png" alt=""></div></div>
    <button id="clickBoxBtn">點擊打開！</button>
    <form action="打上PHP的名字.php" method="POST" data-page="1" id="storeMoneyForm">
        <div class="pagewrap">
            <button type="button" class="closeBtn">X</button>
            <div>
                <div class="page page1">
                    <div class="pageItem">
                        <div>
                            <h3>輸入你要儲值的金額</h3>
                            <label for="ntcoin">NT$<input type="number" min="1"  id="ntcoin"required ></label>
                        </div>
                        <div>
                            <h3>你兌換的夜市幣金額</h3>
                            <div>
                                <img src="./img/store_money/money.png">
                                <p class="yescoin1"> 0</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page page2">
                    <div class="pageItem">
                        <h3>你儲值的金額方案</h3>
                        <div>
                            <div><p>選購夜市幣金額</p><p class="yescoin"></p></div>
                            <div><p>新台幣扣除金額</p><p class="ntcoin"></p></div>
                        </div>
                        <div>
                            <div>
                                <h4>請輸入信用卡號</h4>
                                <div>
                                    <input type="number" min="1" required><input type="number" min="1" required>
                                    <input type="number" min="1" required><input type="number" min="1" required>
                                </div>
                                <div class="cardsImg">
                                    <img src="./img/store_money/creditCardV.png">
                                    <img src="./img/store_money/creditCardM.png">
                                    <img src="./img/store_money/creditCardP.png">
                                </div>
                            </div>
                            <div>
                                <h4>輸入安全碼</h4>
                                <label><input type="number" min="1" max="999" required>xxx <img src="./img/store_money/creditCard3c.png"></label>
                            </div>
                            <div>
                                <h4>信用卡到期日</h4>
                                <div>
                                    <label><input type="number" min="1" required>月</label>
                                    <label><input type="number" min="1" required>年</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ctrlBtns">
                <button type="button" id="yesNextBtn" class="btn-rect_pk2">儲值夜市幣</button>
                <button type="button" class="btn-rect_gr2 closeBtn">取消儲值</button>
                <!-- "javascript:location.href='https://google.com'" -->
            </div>
        </div>
    </form>
    <div class="popbox">
        <div class="pageItem">
            <div><h4>來自夜市客的通知</h4></div>
            <div>儲值成功<img src="./img/store_money/tick.png"></div>
            <div>目前剩餘夜市幣<p id="myyescoin"></p></div>
            <button type="button" id="okIKnow" class="btn-rect_pk1">確認</button>
        </div>
</div>
</div>