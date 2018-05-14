import React, { Component } from 'react'
import './style.less'
import StationList from '../../components/StationList'
import StationSelect from './station-select'
import Recommand from './recommand'
import http from '../../api/http'


class End extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nodelist: [
                ['罗湖站', '国贸站', '老街站', '大剧院站', '红岭南', '科学馆站', '华强路站', '岗厦站', '会展中心站', '购物公园站', '香蜜湖站', '车公庙站', '竹子林站', '侨城东站', '华侨城站', '世界之窗站', '白石洲站', '高新园站', '深大站', '桃园站', '大新站', '鲤鱼门站', '前海湾站', '新安站', '宝安中心站', '宝体站', '坪洲站', '西乡站', '固戍站', '后瑞站', '机场东站'],
                ['赤湾站', '蛇口港站', '海上世界站', '水湾站', '东角头站', '湾厦站', '海月站', '登良站', '后海站', '科苑站', '红树湾站', '世界之窗站', '侨城北站', '深康站', '安托山站', '侨香站', '香蜜站', '香梅北站', '景田站', '莲花西站', '福田站', '市民中心站', '岗厦北站', '华强北站', '燕南站', '大剧院站', '湖贝站', '黄贝岭站', '新秀站'],
                ['益田站', '石厦站', '购物公园站', '福田站', '少年宫站', '莲花村站', '华新站', '通新岭站', '红岭站', '老街站', '晒布站', '翠竹站', '田贝站', '水贝站', '草埔站', '布吉站', '木棉湾站', '大芬站', '丹竹头站', '六约站', '塘坑站', '横岗站', '永湖站', '荷坳站', '大运站', '爱联站', '吉祥站', '龙城广场站', '南联站', '双龙站']
            ],
            show: false,
            begin: '',
            end: '',
            hash: '',
            time: '',
            lastTimeObj: {}
        }
        this.change = this.change.bind(this)
        this.showlist = this.showlist.bind(this)
        this.choosenode = this.choosenode.bind(this)
    }

    change (e) {
        let time = e.target.value + ':00'
        this.setState({
            time: e.target.value
        })
        if (this.state.begin && this.state.end && time) {
            http.post(`http://172.29.42.39/Station/Home/GetLastTrainTime?startName=${encodeURI(this.state.begin)}&endName=${encodeURI(this.state.end)}&time=${encodeURI(time)}`)
            .then(data => {
                this.setState({
                    lastTimeObj: {
                        line: data.data.Data.Item1,
                        time: data.data.Data.Item2
                    }
                })
            })
            .catch(err => {
                alert(err)
            })
        }
    }

    showlist (key) {
        this.setState({
            show: true,
            hash: key
        })
    }

    choosenode (node) {
        if (node) {
            let b = ''
            let e = ''
            if (this.state.hash === 'begin') {
                b = node
                e = this.state.end
                this.setState({
                    begin: node,
                    show: false
                })
            } else {
                b = this.state.begin
                e = node
                this.setState({
                    end: node,
                    show: false
                })
            }
            if (b && e && this.state.time) {
                http.post(`http://172.29.42.39/Station/Home/GetLastTrainTime?startName=${encodeURI(b)}&endName=${encodeURI(e)}&time=${encodeURI(this.state.time)}`)
                .then(data => {
                    this.setState({
                        lastTimeObj: {
                            line: data.data.Data.Item1,
                            time: data.data.Data.Item2
                        }
                    })
                })
                .catch(err => {
                    alert(err)
                })
            }
        } else {
            this.setState({
                show: false
            })
        }
    }

    render () {
        return (
            <div className='path'>
                <StationSelect showlist={this.showlist} begin={this.state.begin} end={this.state.end}/>
                <div className='path__date'>
                    <div className='path__date__title'>选择时间</div>
                    <input type="time" onChange={(e) => this.change(e)}/>
                </div>
                <Recommand obj={this.state.lastTimeObj}/>

                {!!this.state.show &&
                    <StationList nodelist={this.state.nodelist}
                                 choosenode={this.choosenode}/>
                }
            </div>
        )
    }
}

export default End