import React, { Component } from 'react'
import './style.less'
import HeaderBar from '../../components/HeaderBar'
import StationList from '../../components/StationList'
import StationSelector from '../../components/StationSelector'
import Card from '../../components/Card'

class Around extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nodelist: [
                ['罗湖站', '国贸站', '老街站', '大剧院站', '红岭南', '科学馆站', '华强路站', '岗厦站', '会展中心站', '购物公园站', '香蜜湖站', '车公庙站', '竹子林站', '侨城东站', '华侨城站', '世界之窗站', '白石洲站', '高新园站', '深大站', '桃园站', '大新站', '鲤鱼门站', '前海湾站', '新安站', '宝安中心站', '宝体站', '坪洲站', '西乡站', '固戍站', '后瑞站', '机场东站'],
                ['赤湾站', '蛇口港站', '海上世界站', '水湾站', '东角头站', '湾厦站', '海月站', '登良站', '后海站', '科苑站', '红树湾站', '世界之窗站', '侨城北站', '深康站', '安托山站', '侨香站', '香蜜站', '香梅北站', '景田站', '莲花西站', '福田站', '市民中心站', '岗厦北站', '华强北站', '燕南站', '大剧院站', '湖贝站', '黄贝岭站', '新秀站'],
                ['益田站', '石厦站', '购物公园站', '福田站', '少年宫站', '莲花村站', '华新站', '通新岭站', '红岭站', '老街站', '晒布站', '翠竹站', '田贝站', '水贝站', '草埔站', '布吉站', '木棉湾站', '大芬站', '丹竹头站', '六约站', '塘坑站', '横岗站', '永湖站', '荷坳站', '大运站', '爱联站', '吉祥站', '龙城广场站', '南联站', '双龙站']
            ],
            show: false,
            node: ''
        }
        this.showlist = this.showlist.bind(this)
        this.choosenode = this.choosenode.bind(this)
    }

    componentDidMount () {
        var map = new AMap.Map("mapContainer");
        AMap.service(["AMap.PlaceSearch"], function() {
            var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
                pageSize: 10,
                type:'酒店', // 酒店 餐饮服务
                pageIndex: 1,
                // city: "011", //城市
                map: map
            });
            //中心点坐标
            var cpoint = [113.86679, 22.57009];
            placeSearch.searchNearBy('', cpoint, 1000, function(status, result) {
                console.log(result)
            });
        });
    }

    showlist (key) {
        this.setState({
            show: true
        })
    }

    choosenode (node) {
        this.setState({
            show: false,
            node
        })
    }

    render () {
        return (
            <div className='around'>
                <HeaderBar title='地铁口周边信息查询'/>
                <StationSelector station={this.state.node} showlist={this.showlist}/>
                <div className='around__list'>
                    <Card title='美食' type='food'>
                    可颂坊（A1）、木屋烧烤（A1）、面鼎香（C）、外婆谣（C）
                    </Card>
                    <Card title='酒店' type='hotel'>
                    城市便捷酒店（A1）、枫叶品园酒店（C）
                    </Card>
                    <Card title='出入口信息' type='list'>
                    A1：思创科技大厦、地铁金融科技大厦
                    <br/>
                    A2：深大北门1（公交站）
                    <br/>
                    A3：汇景豪苑、海欣阁、海怡阁
                    <br/>
                    A4：华润万家、深南花园
                    <br/>
                    C：中国储能大厦、高科机楼、深大地铁站（公交站）
                    </Card>
                </div>
                {!!this.state.show &&
                    <StationList nodelist={this.state.nodelist}
                                choosenode={this.choosenode}/>
                }
            </div>
        )
    }
}

export default Around