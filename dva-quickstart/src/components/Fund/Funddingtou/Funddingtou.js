import React from 'react';
import { connect } from 'dva';
import axios from 'axios';


class Funddingtou extends React.Component {


    render() {

        return (
            <div>

                <div className="container-all">

                    <div name="jijin_dingtou_jieshao" className="banner anchor-hook"><img src="https://image2.suning.cn/uimg/cms/img/154587324444545264.jpg" alt="定投专区" /></div>
                    <div className="icon-box">
                        <div name="jijin_dingtou_wode" className="icon-box-left icon-box-part anchor-hook"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAsCAYAAAFQ5NvMAAAAAXNSR0IArs4c6QAABwZJREFUaAXNWWuIlUUYfufbC6VLkEWpWf3rJijlpm0YWaRgGZY/tNI1tHU3VDQ39UcQRNIfS8UlM20pTNPqh2F3VkKjaFFXKMu0gqK0NCijdk3di1/PM+eb2Tnf+W5nz0mdwznzzjvvdd65vDNHxCm1G/1/nKYIEN8QMWaDr8v6fb5v2pUAR7Kxv0kp1USov3gG9DfL84T910VzEradql6WsUPNFsUOFg1QX66Z99tiW7e+5g+t3eAvtIjaV/yHwVWVs9P3Yflx25kIQJOClQ2JROxUMVbFm/zpHJF574p8/2eB8GotjUPHrjjJ7MujSSIksb9FHmRtCukrTcOtdTyUPImorFKz+off0oCzE99hFpECxFqGSHw4ZqP/bRR/JTrbEICJbueS20TGjRCZgVi6eA27agiHS7jfOg9NkymvdmOBTMFM+qWjSV3DHsvQ0ag+QttOzEK2HMbO5jgCTK4jbl8Bg7s2grgscRmsSRap5C8Q9qHt4XMvAkhTbSnQgIU2BL2eVMidYWJyFWoA0l2VJHJL7FpwiVzYDuO4V/2b+nrlbcRC7x4uUbEwFk8neFoRqmbyKgrv7ZGDuuHJIx3z1DbCLAjyMcR/6JCLRdrqczj39/AfIrO25zDVl8qg9unqFFuYUcOgaC8MHoG6z7puFqYRAgUroWDZtBtFnrrDYKNrMwvDMsz0jQwIpvARWkGR2w/lvtHi87EUGlZEikglGMur89lLaxXMxWLEYenM5opwV0gUf6QnLiEEfIb2eOLMvAZuAZov6oNJyVQsEuzV8SVVCQTrsENwd57FntyDVfdJvOj+nlQlhhTKqg1cbO1hHq8hE2dUscxJ9GM3+ZeZfnOwVUHZKUzbCtNRproFU3qx3VbShDJZ8JXMBwPXz+eqSubum6My5QhWCYZrNTyZBwE1aQrT+jEqBysqZfqeuUofjdxWqsDUncZ4HUZ4xd3YyGDCjsMiq9vTODDllezEwp6k4EEvYwHEUdRjMYbHyA7lg1CdJLxlmsgNlxPKL5M2i5zAlojhOI7T0mYGTL38s7KV1JVVMtIzweZWYhQEon5i3XBLtAL2mZ2ZO3UwIkQLd3KFHZ0wj4+kbeUKEj1ey9/4wl2aBd48l4Nyv+bIgBMjIxcjkwVYp4vZxoNmbMVjAUO/CyOSd1CTIdITMAx0F47Ib2K2+qgzIdaFDB2RnmTgK4qkZCVMx5AmT07SWpISbP19OFNG4BsZC6M4VQnPEFjbahhMDdxZwB7mbi8OrcSJkqpEC/XlMQh9Ok8BrkX4dEMBt6XEErlO8jg8GQWbD2BInoVXP6Bvmz52RU5DATKy9JLqCY7Yr2GxCaxJ/P7FSZlJAU1IVUIiWPwxFM0njLoLCgZrOONP+nAFgqBoPUB+iy6ZPClaKhiwK+utH0dIp1VS1+oPGYiwOB4I3xv0tfJkXIvGojjiUvHcBz38LIagllKFhfnhSR9wOleziUSYqNh23Sb/qu7TshJ8D+FrwxAjh7vFm9UXyfL2R9WvMTRFoa0jwRH9ArxcYI79oiSdQ2JGAjaug8qliHYPVWtHyjW/BiPIzXUiU69P9mrHd7ms7WRqrpcsJ+jNJcJBbmofDuDt0SpPRrc3qBNxYvAs04xteJXpr8RE2nC/yOgrDSZb/dXvIk3vifRyopmCx6X9jWq1aYZrXhXOnpEvERF9oWU/bF7D1c5LvZtgD0e4dJoaFsI20s8JSD93mb4aROF95ImsB1K6EJUpW0VYm4LM8y4khrtNO1zDZu6Jvzn4Li5K1wk+5MU6QUY4scIRIM9MGLgTlMMBoAy3hHW4fYQjbKzJfFxhCtr3CVfw0ja3VTZ4PEbd5zTP+mTBiGQtjdgZyno1TlIc6GpMonH7MkckuG/oh01XwIUCFxORC8XmSDsyRySSu0QkUveZELEJW3nukQVrAqlj4r0gTmVZHPHfkLHIehQS4z1xilw8HJgD41vx7Z8RuNygtdClKwYu2REY9TecuIRKcWdhrrAWo/pElBGgbQJ+PRywqRHaPXBgBq4l70TxZMX1j0hWjjCdJzfDrP6zx5fF+mq5JbjCgB7tRcTh87LjxBnwTeFLY6lO0KSSI6Jmyo+QMxyjfTuM3AmYj1aCm+U64FqAy81/jcQPHh7xfQDGl/UEKtkRa1+9fAF4MJ4jZsCJrYC9PCeUfpGbgmm32/CUsy59aoWswUi/helSATf4tM6/PQ8BroMDNf+XEzShbBGhMLfAoZfQ5vecFL7M63+vjDY+rhr4Qq3DNtIH/VccHmoPuLdCJmtYkMuRhe6OyDTPi39M3ZHeT8C6Wxm6i/ThfX6UuSHyb4wPQDDxvFg5QKWweSdsvg+D3eMeTFpc8E9sAxqTQHQt6rz7ygB1loOtC4b/DEFtiECr+YfECP4PID52X60awTgAAAAASUVORK5CYII=" alt="我的定投" />
                            <p>我的定投</p>
                        </div>
                        <div name="jijin_duanqi_paihang" className="icon-box-right icon-box-part anchor-hook"><img src="data:image/png;base64,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" alt="定投排行" />
                            <p>定投排行</p>
                        </div>
                    </div>
                    <div className="img-all">
                        <div className="img-left"><img src="http://image2.suning.cn/uimg/cms/img/154596642986654266.jpg" alt name="jijin_dingtou_anli_01" className="anchor-hook" />
                            {/**/}
                            {/**/}
                        </div>
                        <div className="img-right">
                            {/**/}<img src="http://image2.suning.cn/uimg/cms/img/154605260610810283.jpg" alt name="jijin_dingtou_anli_02" className="anchor-hook" /><img src="http://image2.suning.cn/uimg/cms/img/154596385553884363.jpg" alt name="jijin_dingtou_anli_03" className="anchor-hook" /></div>
                    </div>
                    <div className="title-theme">
                        <p>热门定投</p>
                        <p>看看大家都在投什么</p>
                    </div>
                    <div className="hotDt">
                        <div className="product-container">
                            <div name="jijin_dingtou_remen_01" className="hotDt-product anchor-hook">
                                <div>
                                    <p className="hotDt-product-title">汇添富中证主要消费ETF联接</p>
                                    <div className="hotDt-product-list">
                                        <div className="hotDt-product-list-left">
                                            <p className="hotDt-product-list-num global-bull"><em><i>+</i>49.07<span>%</span></em></p>
                                            <p className="hotDt-product-list-year">近3年定投收益率</p>
                                        </div>
                                        <div className="hotDt-product-list-middle">
                                            <p className="hotDt-product-list-people">9541<span><i className="for-unit">人</i></span></p>
                                            <p className="hotDt-product-list-peNum">累计定投人数</p>
                                        </div>
                                        <div className="hotDt-product-list-right">
                                            <p className="hotDt-product-list-lvNum"><span className="hotDt-product-list-former">1.00%</span>0.10%
              </p>
                                            <p className="hotDt-product-list-lvText">买入费率</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="hotDt-product-btn">一键定投</div>
                                <div className="menu-tip-num">NO.1</div>
                            </div>
                            <div name="jijin_dingtou_remen_02" className="hotDt-product anchor-hook">
                                <div>
                                    <p className="hotDt-product-title">融通深证100指数A</p>
                                    <div className="hotDt-product-list">
                                        <div className="hotDt-product-list-left">
                                            <p className="hotDt-product-list-num global-bull"><em><i>+</i>6.57<span>%</span></em></p>
                                            <p className="hotDt-product-list-year">近5年定投收益率</p>
                                        </div>
                                        <div className="hotDt-product-list-middle">
                                            <p className="hotDt-product-list-people">7291<span><i className="for-unit">人</i></span></p>
                                            <p className="hotDt-product-list-peNum">累计定投人数</p>
                                        </div>
                                        <div className="hotDt-product-list-right">
                                            <p className="hotDt-product-list-lvNum"><span className="hotDt-product-list-former">1.50%</span>0.15%
              </p>
                                            <p className="hotDt-product-list-lvText">买入费率</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="hotDt-product-btn">一键定投</div>
                                <div className="menu-tip-num">NO.2</div>
                            </div>
                            <div name="jijin_dingtou_remen_03" className="hotDt-product anchor-hook">
                                <div>
                                    <p className="hotDt-product-title">创金合信中证1000</p>
                                    <div className="hotDt-product-list">
                                        <div className="hotDt-product-list-left">
                                            <p className="hotDt-product-list-num global-bull"><em><i>+</i>4.87<span>%</span></em></p>
                                            <p className="hotDt-product-list-year">近2年定投收益率</p>
                                        </div>
                                        <div className="hotDt-product-list-middle">
                                            <p className="hotDt-product-list-people">5153<span><i className="for-unit">人</i></span></p>
                                            <p className="hotDt-product-list-peNum">累计定投人数</p>
                                        </div>
                                        <div className="hotDt-product-list-right">
                                            <p className="hotDt-product-list-lvNum">免手续费</p>
                                            <p className="hotDt-product-list-lvText">买入费率</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="hotDt-product-btn">一键定投</div>
                                <div className="menu-tip-num">NO.3</div>
                            </div>
                            <div name="jijin_dingtou_remen_04" className="hotDt-product anchor-hook">
                                <div>
                                    <p className="hotDt-product-title">申万中证500指数优选增强</p>
                                    <div className="hotDt-product-list">
                                        <div className="hotDt-product-list-left">
                                            <p className="hotDt-product-list-num global-bull"><em><i>+</i>4.29<span>%</span></em></p>
                                            <p className="hotDt-product-list-year">近2年定投收益率</p>
                                        </div>
                                        <div className="hotDt-product-list-middle">
                                            <p className="hotDt-product-list-people">5440<span><i className="for-unit">人</i></span></p>
                                            <p className="hotDt-product-list-peNum">累计定投人数</p>
                                        </div>
                                        <div className="hotDt-product-list-right">
                                            <p className="hotDt-product-list-lvNum"><span className="hotDt-product-list-former">1.20%</span>0.12%
              </p>
                                            <p className="hotDt-product-list-lvText">买入费率</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="hotDt-product-btn">一键定投</div>
                                <div className="menu-tip-num">NO.4</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }




}





export default connect()(Funddingtou);