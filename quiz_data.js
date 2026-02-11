const QUIZ_DATA = {
  "questions": [
    {
      "id": 1,
      "category": "ネットワーキングの機能について",
      "question": "スモールオフィス/ホームオフィスのネットワーク環境の特徴を、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "アップリンクに10G ポートが必要である",
        "コア層、ディストリビューション層、アクセス層のアーキテクチャが必要である",
        "50～100ユーザをサポートする",
        "ブロードバンド接続用ルータを使用する",
        "1～50ユーザをサポートする"
      ],
      "correct_answers": [3, 4],
      "answer_count": 2,
      "question_image": "0007.jpg",
      "answer_image": "page_0003.png",
      "explanation": "スモールオフィス/ホームオフィスは、一般的に1～50ユーザの小規模環境であり、ブロードバンド接続用ルータを使用します。"
    },
    {
      "id": 2,
      "category": "TCP/IP リンク レイヤについて",
      "question": "UTP Cat5eケーブルとCat6aケーブルの類似点について、適切な説明を次の選択肢の中から2つ選びなさい。",
      "choices": [
        "どちらも1ギガビット以上の速度をサポートする",
        "どちらも最大10ギガビットの速度をサポートする",
        "どちらも500MHzの周波数で動作する",
        "どちらも最大55メートルの距離をサポートする",
        "どちらも最大100メートルの距離をサポートする"
      ],
      "correct_answers": [0, 4],
      "answer_count": 2,
      "question_image": "0007.jpg",
      "answer_image": "page_0004.png",
      "explanation": "Cat5eとCat6aケーブルは、どちらも1ギガビット以上の速度をサポートし、最大100メートルの距離をサポートします。"
    },
    {
      "id": 3,
      "category": "TCP/IP リンク レイヤについて",
      "question": "光ファイバーケーブルと銅ケーブルの違いとして適切なものを、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "データはクラッドを通過する",
        "ファイバーはRJ-45接続を使用して物理インターフェイスに接続する",
        "BNCコネクターはファイバー接続に使用される",
        "ガラスコアコンポーネントはクラッドに入っている",
        "光はファイバーのコアを通過する"
      ],
      "correct_answers": [3, 4],
      "answer_count": 2,
      "question_image": "0007.jpg",
      "answer_image": "page_0004.png",
      "explanation": "光ファイバーケーブルでは、ガラスコアコンポーネントがクラッドに入っており、光はファイバーのコアを通過します。"
    },
    {
      "id": 4,
      "category": "TCP/IP リンク レイヤについて",
      "question": "Ethernetフレームフォーマットのフィールドを、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "送信元IPアドレス",
        "FCS(frame check sequence)",
        "宛先IPアドレス",
        "ヘッダ",
        "タイプ"
      ],
      "correct_answers": [1, 4],
      "answer_count": 2,
      "question_image": "0008.jpg",
      "answer_image": "page_0004.png",
      "explanation": "Ethernetフレームフォーマットには、FCS(frame check sequence)とタイプフィールドが含まれます。"
    },
    {
      "id": 5,
      "category": "TCP/IP リンク レイヤについて",
      "question": "図のような構成において、PC4からPC1へフレームを送信した際にスイッチが取るアクションとして正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "送信元MACアドレスとポートをMACアドレステーブルに挿入し、フレームをPC1に転送する",
        "MACアドレステーブルでルックアップを実行するが、エントリがないためにフレームを破棄する",
        "レイヤー2MACアドレスをレイヤー3 IPアドレスにマッピングし、フレームを転送する",
        "PC1が接続されているポートを除く、全てのポートからフレームをフラッディングする"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0008.jpg",
      "answer_image": "page_0005.png",
      "has_diagram": true,
      "explanation": "スイッチは送信元MACアドレスとポートをMACアドレステーブルに挿入し、既知の宛先であるPC1にフレームを転送します。"
    },
    {
      "id": 6,
      "category": "TCP/IP リンク レイヤについて",
      "question": "スイッチが、フレームを受信したインターフェイス以外のすべてのインターフェイスからそのフレームを転送する動作を何と呼びますか。正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "フラッディング",
        "マルチキャスト",
        "ARP",
        "CDP"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0009.jpg",
      "answer_image": "page_0006.png",
      "explanation": "この動作はフラッディングと呼ばれます。"
    },
    {
      "id": 7,
      "category": "TCP/IP インターネット レイヤ、IPv4アドレシング、およびサブネットの概要",
      "question": "10.3.160.0/20 サブネットに所属するホストアドレスを、次の選択肢の中から3つ選びなさい。",
      "choices": [
        "10.3.176.1",
        "10.3.160.255",
        "10.3.168.0",
        "10.3.174.255",
        "10.3.160.0",
        "10.3.175.255"
      ],
      "correct_answers": [1, 3, 5],
      "answer_count": 3,
      "question_image": "0009.jpg",
      "answer_image": "page_0006.png",
      "explanation": "10.3.160.0/20のサブネットに含まれるホストアドレスは、10.3.160.255、10.3.174.255、10.3.175.255です。"
    },
    {
      "id": 8,
      "category": "TCP/IP インターネット レイヤ、IPv4アドレシング、およびサブネットの概要",
      "question": "異なるサブネットの複数のホストに対して、同じデータを1回で送信するために使用する宛先IPアドレスを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "239.254.0.1",
        "172.30.2.1",
        "192.168.1.200",
        "127.0.0.1"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0009.jpg",
      "answer_image": "page_0006.png",
      "explanation": "マルチキャストアドレス239.254.0.1を使用して、複数のホストに同時にデータを送信できます。"
    },
    {
      "id": 9,
      "category": "TCP/IP インターネット レイヤ、IPv4アドレシング、およびサブネットの概要",
      "question": "IPアドレス 172.18.159.170/22 が含まれるサブネットのネットワークアドレスを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "172.18.0.0",
        "172.18.152.0",
        "172.18.128.0",
        "172.18.144.0",
        "172.18.156.0",
        "172.18.158.0",
        "172.18.159.0"
      ],
      "correct_answers": [4],
      "answer_count": 1,
      "question_image": "0010.jpg",
      "answer_image": "page_0006.png",
      "explanation": "/22サブネットマスクを適用すると、172.18.156.0がネットワークアドレスになります。"
    },
    {
      "id": 10,
      "category": "TCP/IP インターネット レイヤ、IPv4アドレシング、およびサブネットの概要",
      "question": "IPアドレス 10.15.25.35/23 が含まれるサブネットに関する説明として正しいものを、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "このサブネットのダイレクトブロードキャストアドレスは10.15.25.255である",
        "このサブネットのサブネットマスクは 255.255.255.250である",
        "このサブネットの最大の有効なホストアドレスは 10.15.25.255である",
        "このサブネットの最小の有効なホストアドレスは 10.15.25.1である",
        "このサブネットのサブネットアドレスは 10.15.24.0である"
      ],
      "correct_answers": [3, 4],
      "answer_count": 2,
      "question_image": "0010.jpg",
      "answer_image": "page_0006.png",
      "explanation": "/23サブネットでは、サブネットアドレスは10.15.24.0で、最小の有効なホストアドレスは10.15.25.1です。"
    },
    {
      "id": 11,
      "category": "TCP/IP インターネット レイヤ、IPv4アドレシング、およびサブネットの概要",
      "question": "エンジニアであるあなたは、図のようなネットワーク構成において、20台のホストを接続予定の新しいオフィスのためにサブネットを追加することになりました。アドレスの無駄を最小限に抑えることができるサブネットのネットワークアドレスとマスクの組合せはどれですか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "20.1.105.48  255.255.255.224",
        "20.1.105.32  255.255.255.240",
        "20.1.105.32  255.255.255.224",
        "20.1.105.48  255.255.255.240"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0011.jpg",
      "answer_image": "page_0007.png",
      "has_diagram": true,
      "explanation": "20台のホストには最低32個のアドレスが必要なので、/27(255.255.255.224)を使用します。"
    },
    {
      "id": 12,
      "category": "TCP/IP インターネット レイヤ、IPv4アドレシング、およびサブネットの概要",
      "question": "以下のネットワークでホストに利用できるアドレスを、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "10.0.1.246",
        "10.0.1.245",
        "10.0.1.247",
        "10.0.1.252"
      ],
      "correct_answers": [0, 1],
      "answer_count": 2,
      "question_image": "0011.jpg",
      "answer_image": "page_0007.png",
      "has_diagram": true,
      "explanation": "10.0.1.244/30サブネットでは、10.0.1.245と10.0.1.246がホストアドレスとして利用可能です。"
    },
    {
      "id": 13,
      "category": "TCP/IP インターネット レイヤ、IPv4アドレシング、およびサブネットの概要",
      "question": "各IPアドレスの範囲として適切なものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "A①  B⑤  C③  D④  E②",
        "A⑤  B②  C③  D④  E①",
        "A④  B①  C③  D⑤  E②",
        "A⑤  B②  C①  D③  E④"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0012.jpg",
      "answer_image": "page_0007.png",
      "has_diagram": true,
      "explanation": "各IPアドレスと範囲を正しくマッピングする必要があります。"
    },
    {
      "id": 14,
      "category": "TCP/IP インターネット レイヤ、IPv4アドレシング、およびサブネットの概要",
      "question": "ある企業のオフィスは、4つのフロアにまたがってネットワークを構成しています。1階:24台のホストを接続、2階:29台のホストを接続、3階:28台のホストを接続、4階:22台のホストを接続。効率の よいアドレスの割当てで集約を行うためには、各フロアのネットワークにどのようなアドレスを割当てるのがよいですか、集約アドレスと、各フロアのネットワークに割当てるアドレス構成として正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "集約アドレスが192.168.0.0/26、各フロアに割り当てるアドレスが192.168.0.0/29",
        "集約アドレスが192.168.0.0/25、各フロアに割り当てるアドレスが192.168.0.0/27",
        "集約アドレスが192.168.0.0/24、各フロアに割り当てるアドレスが192.168.0.0/28",
        "集約アドレスが192.168.0.0/23、各フロアに割り当てるアドレスが192.168.0.0/25"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0012.jpg",
      "answer_image": "page_0007.png",
      "explanation": "最大29台のホストに対応するには/27が必要です。4つのサブネットを集約するには/25が適切です。"
    },
    {
      "id": 15,
      "category": "TCP/IP インターネット レイヤ、IPv4アドレシング、およびサブネットの概要",
      "question": "RFC1918で規定されているアドレス空間が満たす役割について正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "IPアドレスの重複を避ける",
        "パブリックIPv6アドレス空間を定義する",
        "パブリックIPv4アドレスを節約する",
        "NATプロトコルをサポートする"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0013.jpg",
      "answer_image": "page_0008.png",
      "explanation": "RFC1918プライベートアドレスは、パブリックIPv4アドレスを節約するために使用されます。"
    },
    {
      "id": 16,
      "category": "TCP/IP インターネット レイヤ、IPv4アドレシング、およびサブネットの概要",
      "question": "プライベートIPv4アドレスの特徴として正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "プライベートIPアドレスを使用してインターネットに到達するためには、NATが不要であることを保証する",
        "すべてのホストがインターネットで安全に通信することを可能にする",
        "外部から企業ネットワークのホストに直接続できるようにする",
        "複数の企業が同じアドレスを競合することなしに使用することができる"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0013.jpg",
      "answer_image": "page_0008.png",
      "explanation": "プライベートIPアドレスは、複数の企業が同じアドレス空間を独立して使用できます。"
    },
    {
      "id": 17,
      "category": "TCP/IP インターネット レイヤ、IPv4アドレシング、およびサブネットの概要",
      "question": "クライアントPCのネットワーク構成パラメータを確認しています。以下の出力結果から判断して適切な組み合わせを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "A→2, B→3, C→4, D→1, E→5",
        "A→2, B→1, C→4, D→3, E→5",
        "A→3, B→1, C→4, D→2, E→5",
        "A→4, B→2, C→5, D→1, E→3"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0014.jpg",
      "answer_image": "page_0008.png",
      "has_diagram": true,
      "explanation": "Windows ipconfigの出力結果から各項目を正しく識別します。"
    },
    {
      "id": 18,
      "category": "TCP/IP インターネット レイヤ、IPv4アドレシング、およびサブネットの概要",
      "question": "以下の出力結果から判断して適切な組合せを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "A⑤  B①  C②  D③  E④",
        "A①  B⑤  C②  D③  E④",
        "A②  B⑤  C①  D③  E④",
        "A①  B⑤  C②  D④  E③"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0015.jpg",
      "answer_image": "page_0009.png",
      "has_diagram": true,
      "explanation": "Linuxのip addrコマンドの出力から各項目を正しく識別します。"
    },
    {
      "id": 19,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "TCPがUDPと異なっている点の説明として正しいものを、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "TCPは通信の同期を実現する",
        "TCPセグメントはデータグラムである",
        "TCPはブロードキャストを使用する",
        "TCPにはパケットの順序番号がある",
        "TCPはベストエフォートの転送を提供する"
      ],
      "correct_answers": [0, 3],
      "answer_count": 2,
      "question_image": "0015.jpg",
      "answer_image": "page_0009.png",
      "explanation": "TCPは同期を実現し、パケットに順序番号を付けて信頼性の高い通信を提供します。"
    },
    {
      "id": 20,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "TCPとUDPは、パケット配信を保証する方法がどのように違いますか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "TCPは再送信、確認、パリティチェックを使用し、UDPは巡回冗長検査のみを使用する",
        "TCPは2次元のパリティチェック、チェックサム、巡回冗長検査を使用し、UDPは再送信のみを使用する",
        "TCPはチェックサム、パリティチェック、再送信を使用し、UDPは確認応答のみを使用する",
        "TCPはチェックサム、確認応答、再送信を使用し、UDPはチェックサムのみを使用する"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0016.jpg",
      "answer_image": "page_0009.png",
      "explanation": "TCPは確認応答と再送信で信頼性を提供し、UDPはチェックサムのみを使用します。"
    },
    {
      "id": 21,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "TCPとUDPのプロトコルの説明として適切な組み合わせを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "1.TCP: B、C    2.UDP: A、D",
        "1.TCP: A、D    2.UDP: B、C",
        "1.TCP: A、C    3.UDP: B、D",
        "1.TCP: A、B    4.UDP: C、D"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0016.jpg",
      "answer_image": "page_0010.png",
      "has_diagram": true,
      "explanation": "TCPはデータチャネルを必要とするパケットに含まれる情報特に基づいて送信される、データを送信する前にクライアントとサーバが接続を確立する必要がある。UDPはデータを確実に送信する必要がない場合に適している、音声ストリーミングなどの低遅延データ転送に適している。"
    },
    {
      "id": 22,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "2つのエンドポイント間の接続を確立する方法でTCPとUDPで異なる点を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "TCPは同期パケットを使用し、UDPは確認パケットを使用する",
        "TCPは3ウェイハンドシェイクを使用し、UDPはメッセージ配信を保証しない",
        "UDPはフレームヘッダーでSYN、SYN ACKおよびFINビットを使用し、TCPはSYN、SYN ACKおよびACKビットを使用する",
        "UDPは信頼できるメッセージ転送を提供し、TCPはコネクションレスプロトコルである"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0017.jpg",
      "answer_image": "page_0010.png",
      "explanation": "TCPは3ウェイハンドシェイクで接続を確立しますが、UDPは接続確立なしでデータを送信します。"
    },
    {
      "id": 23,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "各アプリケーションプロトコルの適切な説明を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "A②  B①  C②  D①  E②",
        "A①  B②  C①  D①  E②",
        "A②  B①  C①  D①  E②",
        "A②  B①  C①  D②  E①"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0017.jpg",
      "answer_image": "page_0010.png",
      "has_diagram": true,
      "explanation": "DHCP、DNSの各プロトコルの役割を正しく理解する必要があります。"
    },
    {
      "id": 24,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "アプリケーションプロトコルとトランスポートプロトコルの適切な対応付けを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "1.TCP: A、B、E    2.UDP: C、D、F",
        "1.TCP: A、C、E    2.UDP: B、D、F",
        "1.TCP: B、C、F    2.UDP: A、D、E",
        "1.TCP: B、C、E    2.UDP: A、D、F"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0018.jpg",
      "answer_image": "page_0011.png",
      "has_diagram": true,
      "explanation": "DHCP、FTP、SMTP、DNS、SSH、TFTPの各プロトコルが使用するトランスポート層を理解する必要があります。"
    },
    {
      "id": 25,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "動的ホスト構成プロトコル(DHCP)の役割についての正しい説明を、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "DHCPサーバは、クライアントIPアドレスを動的にリースする",
        "DHCPクライアントは、最大4つのDNSサーバアドレスを要求できる",
        "DHCPサーバは、IPアドレスのプールから特定のIPアドレスを除外する機能を提供する",
        "DHCPサーバは、クライアントに更新を要求せずにIPアドレスを割り当てる",
        "DHCPクライアントは、割り当て可能なIPアドレスのプールを維持する"
      ],
      "correct_answers": [0, 2],
      "answer_count": 2,
      "question_image": "0018.jpg",
      "answer_image": "page_0011.png",
      "explanation": "DHCPサーバはIPアドレスを動的に割り当て、特定のアドレスを除外することができます。"
    },
    {
      "id": 26,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "R1にDHCPからIP構成を取得するトポロジを展開しています。スイッチとDHCPサーバが正しい構成である場合、タスクを完了するためにR1とR2で構成する必要があるコマンドを、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "B",
        "D",
        "A",
        "C",
        "E"
      ],
      "correct_answers": [0, 4],
      "answer_count": 2,
      "question_image": "0019.jpg",
      "answer_image": "page_0011.png",
      "has_diagram": true,
      "explanation": "DHCPリレーエージェントの設定にはip helper-addressコマンドが必要です。"
    },
    {
      "id": 27,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "ネットワーク管理者は2つのサイトにIPアドレスを割り当てるためにDHCPサーバを実装しなければいけません。ルータがDHCPサーバへDHCP DISCOVERメッセージを転送できるようにするために、どの機能を有効にしますか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "DHCPプール",
        "DHCPバインディング",
        "DHCPスヌーピング",
        "DHCPリレーエージェント"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0019.jpg",
      "answer_image": "page_0012.png",
      "explanation": "DHCPリレーエージェントは、ブロードキャストをユニキャストに変換してDHCPサーバに転送します。"
    },
    {
      "id": 28,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "DHCPのhelper-addressコマンドを設定する適切な場所を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "クライアントに最も近いルータ",
        "サーバに最も近いルータ",
        "スイッチトランクインタフェース",
        "パス上のすべてのルータ"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0020.jpg",
      "answer_image": "page_0012.png",
      "explanation": "DHCPヘルパーアドレスは、クライアントに最も近いルータのインターフェイスに設定します。"
    },
    {
      "id": 29,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "DHCPサーバに設定される情報として正しいものはどれですか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ドメインに参加するユーザのユーザ名・パスワード",
        "有効なIPアドレスのリストが記載されたプール",
        "パブリックIPアドレスとそれに対応した名前のリスト",
        "スタティックに割り当てられたMACアドレスのリスト"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0020.jpg",
      "answer_image": "page_0012.png",
      "explanation": "DHCPサーバには、割り当て可能なIPアドレスのプールが設定されます。"
    },
    {
      "id": 30,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "デフォルトゲートウェイが自動的に配布されるようルータにDHCPを構成するためのコマンドとして正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ip helper-address",
        "default-gateway",
        "default-router",
        "dns-server"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0020.jpg",
      "answer_image": "page_0012.png",
      "explanation": "DHCPプール設定でdefault-routerコマンドを使用してデフォルトゲートウェイを配布します。"
    },
    {
      "id": 31,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "DNSのコンポーネントとその説明に関して適切な組み合わせを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "A=①  B=②  C=⑤  D=④  E=③",
        "A=①  B=②  C=④  D=③  E=⑤",
        "A=③  B=②  C=⑤  D=①  E=④",
        "A=③  B=②  C=①  D=④  E=⑤"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0021.jpg",
      "answer_image": "page_0012.png",
      "has_diagram": true,
      "explanation": "DNSの各コンポーネント(キャッシュ、DNS、ドメイン、ネームリゾルバ、no ip domain lookup)の役割を正しく理解する必要があります。"
    },
    {
      "id": 32,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "ファイル転送プロトコルの種類とその説明について、正しい組み合わせを次の選択肢の中から1つ選びなさい。",
      "choices": [
        "①=A, C, E  ②=B, D, F",
        "①=A, D, F  ②=B, C, E",
        "①=B, D, E  ②=A, C, F",
        "①=A, D, E  ②=B, C, F"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0022.jpg",
      "answer_image": "page_0013.png",
      "has_diagram": true,
      "explanation": "FTPとTFTPの特徴を正しく理解する必要があります。FTPはIOS展開時の信頼性を提供、ユーザ認証を必要としない、TCPを使用。TFTPは69番ポートを使用、20,21番ポートを使用、UDPを使用。"
    },
    {
      "id": 33,
      "category": "ルーティングの機能について",
      "question": "図のようにルーティングテーブルにルートが登録されています。学習したプレフィックスとサブネットマスクの正しい組み合わせはどれですか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "1-A, 2-C, 3-D, 4-E, 6-B",
        "1-B, 2-C, 3-D, 4-E, 5-A",
        "1-E, 2-C, 3-D, 4-B, 7-A",
        "1-D, 2-E, 3-B, 4-C, 8-A"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0023.jpg",
      "answer_image": "page_0013.png",
      "has_diagram": true,
      "explanation": "ルーティングテーブルのエントリからプレフィックスとサブネットマスクを正しく識別します。"
    },
    {
      "id": 34,
      "category": "ルーティングの機能について",
      "question": "EIGRPを実行しているルータは、2つの異なるパスから同じルートを学習しました。最適なパスを選択するためのパラメータを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "メトリック",
        "コスト",
        "ホップ数",
        "アドミニストレーティブディスタンス"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0023.jpg",
      "answer_image": "page_0013.png",
      "explanation": "EIGRPはメトリック値(帯域幅と遅延から計算)を使用して最適パスを選択します。"
    },
    {
      "id": 35,
      "category": "ルーティングの機能について",
      "question": "R1がインターネットアクセスするために利用するルートタイプを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ネットワークルート",
        "フローティングスタティックルート",
        "デフォルトルート",
        "ホストルート"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0024.jpg",
      "answer_image": "page_0014.png",
      "has_diagram": true,
      "explanation": "インターネットアクセスには通常デフォルトルート(0.0.0.0/0)を使用します。"
    },
    {
      "id": 36,
      "category": "ルーティングの機能について",
      "question": "図のトポロジとR3のルーティングテーブルを見て、192.168.0.200から192.168.0.1宛てに送信されたパケットがどのように転送されるか、正しい説明を次の選択肢の中から1つ選びなさい。",
      "choices": [
        "R3からR1へ転送される",
        "R3からR1、およびR3からR2を経由してR1へ転送される",
        "R3からR2を経由してR1へ転送される",
        "R3からR1を経由してR2へ転送される"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0025.jpg",
      "answer_image": "page_0014.png",
      "has_diagram": true,
      "explanation": "ルーティングテーブルの内容から、複数のパスが存在する場合の転送動作を理解します。"
    },
    {
      "id": 37,
      "category": "ルーティングの機能について",
      "question": "デフォルトのアドミニストレイティブディスタンス値が最も小さいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "内部BGP",
        "RIP",
        "OSPF",
        "IS-IS",
        "EIGRP"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0025.jpg",
      "answer_image": "page_0014.png",
      "explanation": "OSPFのデフォルトAD値は110で、選択肢の中では比較的小さい値です。"
    },
    {
      "id": 38,
      "category": "ルーティングの機能について",
      "question": "複数のルーティングプロトコルで同じ経路を学習していると想定します。どのプロトコルで学習したものをルーティングテーブルのエントリとして登録しますか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "OSPF",
        "BGP",
        "CONNECTED",
        "EIGRP"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0026.jpg",
      "answer_image": "page_0014.png",
      "explanation": "CONNECTEDルート(直接接続)のAD値は0で最も優先されます。"
    },
    {
      "id": 39,
      "category": "ルーティングの機能について",
      "question": "OSPFとEIGRPで同じ経路を学習した場合にルーティングテーブルに登録される経路のAD値を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "90",
        "110",
        "115",
        "120"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0026.jpg",
      "answer_image": "page_0015.png",
      "explanation": "EIGRPのAD値は90、OSPFは110なので、EIGRPが優先されます。"
    },
    {
      "id": 40,
      "category": "ルーティングの機能について",
      "question": "IS-IS、OSPF、RIP、および内部EIGRPを介してルート192.168.12.0/24を学習しました。ルーティングテーブルにインストールされているルーティングプロトコルを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "RIP",
        "OSPF",
        "IS-IS",
        "内部EIGRP"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0026.jpg",
      "answer_image": "page_0015.png",
      "explanation": "内部EIGRPのAD値は90で、他のプロトコルより優先されます。"
    },
    {
      "id": 41,
      "category": "ルーティングの機能について",
      "question": "図の構成において、ネットワークエンジニアがR4でルーティングテーブルを確認しています。ネットワーク192.168.10.0/24へのネクストホップについて正しい説明を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ディスタンスベクタルーティングプロトコルであるため、ネクストホップは10.1.2.1である",
        "アドミニストレイティブディスタンスが優れているため、ネクストホップは10.1.0.1である",
        "リンクステートルーティングプロトコルであるため、ネクストホップは10.1.2.1である",
        "メトリックが大きいため、ネクストホップはは10.1.0.1である"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0027.jpg",
      "answer_image": "page_0015.png",
      "has_diagram": true,
      "explanation": "複数のルーティングプロトコルが同じ宛先を学習した場合、AD値が小さい方が優先されます。"
    },
    {
      "id": 42,
      "category": "ルーティングの機能について",
      "question": "ルーティングテーブルに以下の経路があります。192.168.192.11宛てのパケットを転送するために利用する経路を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "192.168.192.0/26",
        "192.168.0.0/16",
        "192.168.0.0/18",
        "192.168.192.0/30"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0027.jpg",
      "answer_image": "page_0015.png",
      "explanation": "最長一致の原則により、最も具体的な(プレフィックスが長い)ルートが選択されます。"
    },
    {
      "id": 43,
      "category": "ルーティングの機能について",
      "question": "ホストIPアドレス 192.168.10.4の最も長いプレフィックス一致のエントリはどれですか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "②",
        "①",
        "④",
        "③"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0028.jpg",
      "answer_image": "page_0016.png",
      "has_diagram": true,
      "explanation": "192.168.10.4に最も一致する(プレフィックス長が最も長い)ルートを選択します。"
    },
    {
      "id": 44,
      "category": "ルーティングの機能について",
      "question": "R1は3つの異なるルーティングプロトコルを実行しています。R1が宛先IP172.16.32.1で受信したパケットを転送するために使用するルート特性はどれですか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "メトリック",
        "最長のプレフィックス",
        "コスト",
        "管理距離"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0028.jpg",
      "answer_image": "page_0016.png",
      "has_diagram": true,
      "explanation": "ルート選択では最長プレフィックスマッチが最優先されます。"
    },
    {
      "id": 45,
      "category": "ルーティングの機能について",
      "question": "図のような設定のルータに対し、送信元が20.10.10.2、宛先が20.10.10.16のパケットが届いた場合のルータの処理として適切なものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ルートが学習されるまで、パケットをキューに入れる",
        "適切なネクストホップへ転送する",
        "学習したすべてのネクストホップにパケットをフラッディングする",
        "パケットを破棄する"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0029.jpg",
      "answer_image": "page_0016.png",
      "has_diagram": true,
      "explanation": "宛先ネットワークへのルートが存在しない場合、パケットは破棄されます。"
    },
    {
      "id": 46,
      "category": "ルーティングの機能について",
      "question": "192.168.16.2を宛先とするトラフィックに対して選択するルートを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "192.168.16.0/24",
        "192.168.16.0/26",
        "192.168.16.0/27",
        "192.168.16.0/21"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0029.jpg",
      "answer_image": "page_0017.png",
      "has_diagram": true,
      "explanation": "最長プレフィックスマッチの原則により、/26が選択されます。"
    },
    {
      "id": 47,
      "category": "ルーティングの機能について",
      "question": "ルータが以下のルーティング情報を持っている場合、192.168.2.16へのトラフィックをどのように処理しますか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "宛先アドレスを含む最長のプレフィックスを持つため、RIPルートを選択する",
        "宛先アドレスを含む最長のプレフィックスを持つため、OSPFルートを選択する",
        "3つのルートすべてのトラフィックを負荷分散する",
        "アドミニストレイティブディスタンスが最も低いため、EIGRPルートを選択する"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0030.jpg",
      "answer_image": "page_0017.png",
      "has_diagram": true,
      "explanation": "同じプレフィックス長の場合、AD値が最も低いルートが選択されます。"
    },
    {
      "id": 48,
      "category": "ルーティングの機能について",
      "question": "10.10.13.214宛のパケットを送信するために使用する経路を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "10.10.13.144/28",
        "10.10.10.0/28",
        "10.10.13.0/25",
        "10.10.13.208/29"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0030.jpg",
      "answer_image": "page_0017.png",
      "has_diagram": true,
      "explanation": "10.10.13.214を含む最も具体的なルートは10.10.13.208/29です。"
    },
    {
      "id": 49,
      "category": "ルーティングの機能について",
      "question": "ホスト172.16.0.14宛でのパケットの転送先はどれですか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "165.209.200.254 via Serial0/0/0",
        "165.209.200.246 via Serial0/1/0",
        "165.209.200.254 via Serial0/0/1",
        "165.209.200.250 via Serial0/0/0"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0031.jpg",
      "answer_image": "page_0017.png",
      "has_diagram": true,
      "explanation": "ルーティングテーブルを確認して適切なネクストホップを選択します。"
    },
    {
      "id": 50,
      "category": "ルーティングの機能について",
      "question": "R1は図のようなルーティングテーブルを持っています。R1が172.21.3.14宛のパケットを受信すると、どこに転送しますか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "192.168.1.254 via FastEthernet0/1",
        "192.168.1.250 via FastEthernet0/0",
        "192.168.1.246 via FastEthernet1/0",
        "192.168.1.254 via FastEthernet0/0"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0031.jpg",
      "answer_image": "page_0018.png",
      "has_diagram": true,
      "explanation": "ルーティングテーブルのエントリから適切なネクストホップインターフェイスを特定します。"
    },
    {
      "id": 51,
      "category": "ルーティングの機能について",
      "question": "R1は図のようなルーティングテーブルを持っています。20.1.1.5宛のパケットを受信すると、どこに転送しますか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "Loopback0",
        "20.1.1.4",
        "20.1.1.50",
        "20.1.1.3"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0032.jpg",
      "answer_image": "page_0018.png",
      "has_diagram": true,
      "explanation": "最長プレフィックスマッチに基づいてネクストホップを選択します。"
    },
    {
      "id": 52,
      "category": "ルーティングの機能について",
      "question": "ルータは、ルーティングテーブルに図のようなルート情報を持っています。このルート情報にしたがってルーティングされるパケットの宛先IPアドレスはどれですか、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "172.16.1.17",
        "172.16.1.127",
        "172.16.1.61",
        "172.16.1.64",
        "172.16.1.254"
      ],
      "correct_answers": [0, 2],
      "answer_count": 2,
      "question_image": "0032.jpg",
      "answer_image": "page_0018.png",
      "has_diagram": true,
      "explanation": "172.16.1.0/26サブネットに含まれるアドレスを選択します。"
    },
    {
      "id": 53,
      "category": "Ciscoルータの設定",
      "question": "スイッチで図のような確認を行いました。問題の原因として正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "間違ったケーブルの種類",
        "スパニングツリー",
        "ポートセキュリティ",
        "shutdownコマンド"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0033.jpg",
      "answer_image": "page_0019.png",
      "has_diagram": true,
      "explanation": "インターフェイスがadministratively downの状態は、shutdownコマンドが実行されていることを示します。"
    },
    {
      "id": 54,
      "category": "Ciscoルータの設定",
      "question": "CDPに関する説明として正しいものを、次の選択肢の中から3つ選びなさい。",
      "choices": [
        "CDPはネットワーク層プロトコルである",
        "CDPはCisco独自のプロトコルである",
        "CDPはデータリンク層プロトコルである",
        "CDPはIEEE標準のプロトコルである",
        "CDPは直接接続されたCisco機器を検出できる",
        "CDPは直接接続されていないCisco機器を検出できる"
      ],
      "correct_answers": [1, 2, 4],
      "answer_count": 3,
      "question_image": "0033.jpg",
      "answer_image": "page_0019.png",
      "explanation": "CDPはCisco独自のデータリンク層プロトコルで、直接接続されたCisco機器を検出します。"
    },
    {
      "id": 55,
      "category": "Ciscoルータの設定",
      "question": "特定のインターフェースにおいてCDPを無効にするコマンドとして正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "no cdp run",
        "no cdp enable",
        "no cdp advertise-v2",
        "clear cdp table"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0033.jpg",
      "answer_image": "page_0019.png",
      "explanation": "インターフェイスレベルでCDPを無効にするには、no cdp enableコマンドを使用します。"
    },
    {
      "id": 56,
      "category": "Ciscoルータの設定",
      "question": "以下の出力結果が得られるコマンドを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "show cdp neighbors",
        "show ip route",
        "show ip interface",
        "show interface"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0034.jpg",
      "answer_image": "page_0019.png",
      "has_diagram": true,
      "explanation": "CDPネイバー情報とケイパビリティコードを表示するのは、show cdp neighborsコマンドです。"
    },
    {
      "id": 57,
      "category": "Ciscoルータの設定",
      "question": "Cisco IOSでLLDPをグローバルに有効にするコマンドを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "lldp enable",
        "lldp run",
        "lldp send",
        "cdp run",
        "cdp enable"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0034.jpg",
      "answer_image": "page_0019.png",
      "explanation": "グローバルコンフィグレーションモードでlldp runコマンドを使用してLLDPを有効にします。"
    },
    {
      "id": 58,
      "category": "Ciscoルータの設定",
      "question": "ネットワークエンジニアであるあなたは、マルチベンダーネットワークのダイアグラムを作成することになりました。トポロジをマップできるようにするためには、Ciscoデバイスでどのコマンドを実行しますか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "Device(config)# cdp run",
        "Device(config)# lldp run",
        "Device(config)# flow-sampler-map topology",
        "Device(config)# cdp enable"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0034.jpg",
      "answer_image": "page_0020.png",
      "explanation": "マルチベンダー環境では、標準プロトコルのLLDPを使用します。"
    },
    {
      "id": 59,
      "category": "Ciscoルータの設定",
      "question": "スイッチが図のように動作しています。スイッチの構成を変更し、毎分LLDPパケットを送信し、LLDPの情報が3分ごとに更新されるようにする必要があります。正しい設定を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "D",
        "B",
        "C",
        "A"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0035.jpg",
      "answer_image": "page_0020.png",
      "has_diagram": true,
      "explanation": "LLDPタイマーを1分、ホールドタイムを3分に設定します。"
    },
    {
      "id": 60,
      "category": "簡易ネットワークのトラブルシューティング",
      "question": "pingを実行したときに表示される出力文字と説明の組み合わせとして、正しいものを1つ選びなさい。",
      "choices": [
        "A③ B② C④ D⑤ E①",
        "A② B① C③ D④ E⑤",
        "A④ B③ C② D⑤ E①",
        "A① B② C③ D⑤ E④"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0036.jpg",
      "answer_image": "page_0020.png",
      "has_diagram": true,
      "explanation": "pingの出力文字: Q=存続時間経過、U=ICMPを受信、!=宛先不達、.=ビジー状態、&=タイムアウト"
    },
    {
      "id": 61,
      "category": "簡易ネットワークのトラブルシューティング",
      "question": "ホストから異なるネットワーク上の他のホストまで正しく通信できるパスがあることを確認する場合の正しい作業を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "リモートネットワークのホストアドレスにpingする",
        "ループバックアドレスにpingする",
        "ホストのデフォルトゲートウェイのIPアドレスにpingする",
        "ローカルインタフェースのアドレスにpingする"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0036.jpg",
      "answer_image": "page_0021.png",
      "explanation": "リモートネットワークのホストアドレスにpingすることで、エンドツーエンドの通信を確認できます。"
    },
    {
      "id": 62,
      "category": "簡易ネットワークのトラブルシューティング",
      "question": "フレームチェックシーケンスエラーがスイッチで発生したときに上昇するカウンタを、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "入力エラー",
        "ジャイアントフレーム",
        "runts",
        "CRCエラー"
      ],
      "correct_answers": [0, 3],
      "answer_count": 2,
      "question_image": "0036.jpg",
      "answer_image": "page_0021.png",
      "explanation": "FCSエラーが発生すると、入力エラーとCRCエラーのカウンタが上昇します。"
    },
    {
      "id": 63,
      "category": "簡易ネットワークのトラブルシューティング",
      "question": "レイトコリジョンの原因となる要素を、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "CSMA/CDを使用する",
        "送信デバイスがフレームを再度送信する前に15秒待機する場合",
        "ケーブルが長い",
        "フレームの32バイト目が送信された後に衝突が発生したとき",
        "片方のデバイスのみ半二重状態である"
      ],
      "correct_answers": [2, 4],
      "answer_count": 2,
      "question_image": "0037.jpg",
      "answer_image": "page_0021.png",
      "explanation": "ケーブルが長い場合や、片方のデバイスのみ半二重状態である場合にレイトコリジョンが発生します。"
    },
    {
      "id": 64,
      "category": "簡易ネットワークのトラブルシューティング",
      "question": "同時にフレームを送信している2つのホストを検出した。この状態は、フレームの最初の64バイトが受信された後に発生する。どのインタフェースカウンタが増加しますか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "collision",
        "late collision",
        "CRC",
        "runt"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0037.jpg",
      "answer_image": "page_0021.png",
      "explanation": "64バイト送信後の衝突はレイトコリジョンとしてカウントされます。"
    },
    {
      "id": 65,
      "category": "基本的なIPv6の概要",
      "question": "IPv6アドレス「2001:0db8:0000:0000:0800:0004:5000:683C」の正しい省略表記について、正しいものを次の選択肢の中から1つ選びなさい。",
      "choices": [
        "2001:db8:800:4:5000:683C",
        "2001:db8:0::800:4:5:683C",
        "2001:0db8::8:4:5:683C",
        "2001::db8:0000::800:3:5000:683C"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0037.jpg",
      "answer_image": "page_0022.png",
      "explanation": "IPv6アドレスの省略表記では、先頭のゼロを省略し、連続するゼロのグループを::で表します。"
    },
    {
      "id": 66,
      "category": "基本的なIPv6の概要",
      "question": "IPv6のアドレスについて、IPv4パブリックアドレスと同じ方法でパブリックにルーティング可能なアドレスを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "グローバルユニキャスト",
        "固有ローカル(ユニークローカル)",
        "リンクローカル",
        "マルチキャスト"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0037.jpg",
      "answer_image": "page_0022.png",
      "explanation": "グローバルユニキャストアドレスは、IPv4のパブリックアドレスと同様にインターネット上でルーティング可能です。"
    },
    {
      "id": 67,
      "category": "基本的なIPv6の概要",
      "question": "IPv6アドレスにおいて、インターネット上でルーティングされないアドレスタイプはどれですか。次の選択肢の中から2つ選びなさい。",
      "choices": [
        "リンクローカル",
        "グローバルユニキャスト",
        "マルチキャスト",
        "ユニークローカル"
      ],
      "correct_answers": [0, 3],
      "answer_count": 2,
      "question_image": "0038.jpg",
      "answer_image": "page_0022.png",
      "explanation": "リンクローカルアドレスとユニークローカルアドレスは、インターネット上でルーティングされません。"
    },
    {
      "id": 68,
      "category": "基本的なIPv6の概要",
      "question": "IPv6アドレスの特性と種類について、適切な組み合わせを次の選択肢の中から1つ選びなさい。",
      "choices": [
        "①=A、B ②=C、D",
        "①=D、A ②=B、C",
        "①=C、D ②=A、B",
        "①=B、C ②=D、A"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0038.jpg",
      "answer_image": "page_0023.png",
      "has_diagram": true,
      "explanation": "リンクローカルアドレスの特性とユニークローカルアドレスの範囲を正しく組み合わせます。"
    },
    {
      "id": 69,
      "category": "基本的なIPv6の概要",
      "question": "パケットを単一のアドレスでなくグループアドレスに送信するIPv6アドレスブロックはどれですか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "2000::/3",
        "FF00::/8",
        "FC00::/7",
        "FE80::/10"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0038.jpg",
      "answer_image": "page_0023.png",
      "explanation": "FF00::/8はマルチキャストアドレスの範囲で、グループアドレスに送信します。"
    },
    {
      "id": 70,
      "category": "基本的なIPv6の概要",
      "question": "IPv6が有効なインタフェースが参加するマルチキャストアドレスを、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "FF02::2",
        "FF02::10",
        "FF02::5",
        "FF02::1"
      ],
      "correct_answers": [0, 3],
      "answer_count": 2,
      "question_image": "0039.jpg",
      "answer_image": "page_0023.png",
      "explanation": "FF02::1は全ノードマルチキャスト、FF02::2は全ルータマルチキャストアドレスです。"
    },
    {
      "id": 71,
      "category": "基本的なIPv6の概要",
      "question": "IPv6ユニキャストアドレスについての正しい説明を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "パケットは、アドレスを持つ最も近いインタフェースにルーティングされる",
        "グループアドレスとして使用される",
        "アドレスはプレフィックスFF00::/8を使用する",
        "他のホストと重複しないユニークなアドレスを設定する"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0039.jpg",
      "answer_image": "page_0023.png",
      "explanation": "ユニキャストアドレスは単一のインタフェースを識別するユニークなアドレスです。"
    },
    {
      "id": 72,
      "category": "基本的なIPv6の概要",
      "question": "EUI-64アドレスの生成について正しい説明を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "インタフェースのMACアドレスが変更なしでインタフェースIDとして使用される",
        "インタフェースIDはランダムな64ビット値として構成される",
        "インタフェースのMACアドレスの先頭に文字FE80が挿入される",
        "インタフェースの元のMACアドレスの7番目のビットが反転する"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0039.jpg",
      "answer_image": "page_0024.png",
      "explanation": "EUI-64では、MACアドレスの7番目のビットを反転してインタフェースIDを生成します。"
    },
    {
      "id": 73,
      "category": "基本的なIPv6の概要",
      "question": "インタフェースのMACアドレスから派生したインタフェースIDを使う場合、IPv6グローバルユニキャストアドレスを割り当てるにはどのアクションを実行する必要がありますか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "EUI-64ビットプロセスを無効にする",
        "ネットワーク上にステートフルDHCPv6サーバーを構成する",
        "インタフェースでSLAACを有効にする",
        "リンクローカルアドレスを明示的に割り当てる"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0039.jpg",
      "answer_image": "page_0024.png",
      "explanation": "SLAACを有効にすることで、MACアドレスからIPv6アドレスを自動生成できます。"
    },
    {
      "id": 74,
      "category": "基本的なIPv6の概要",
      "question": "CiscoルータでIPv6接続を行うために使用するコマンドを、次の選択肢の中から3つ選びなさい。",
      "choices": [
        "R1(config-if)# ipv6 unicast-routing",
        "R1(config-if)# ipv6 address 2001:DB8:0:5::1/64",
        "R1(config)# ipv6 unicast-routing",
        "R1(config-if)# no shutdown",
        "R1(config)# no shutdown",
        "R1(config-if)# ip address 2001:DB8:0:5::1/64"
      ],
      "correct_answers": [1, 2, 3],
      "answer_count": 3,
      "question_image": "0040.jpg",
      "answer_image": "page_0024.png",
      "explanation": "IPv6を有効にするには、グローバルでipv6 unicast-routingを設定し、インタフェースにIPv6アドレスを割り当て、インタフェースを有効化します。"
    },
    {
      "id": 75,
      "category": "基本的なIPv6の概要",
      "question": "IPv6のアドレスについてプレフィックスを指定し、MACアドレスからインタフェースIDを生成するコマンドを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ipv6 address dhcp",
        "ipv6 address 2001:DB8:5:112::/64 eui-64",
        "ipv6 address autoconfig",
        "ipv6 address 2001:DB8:5:112::2/64 link-local"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0040.jpg",
      "answer_image": "page_0024.png",
      "explanation": "eui-64オプションを使用すると、MACアドレスからインタフェースIDを自動生成します。"
    },
    {
      "id": 76,
      "category": "基本的なIPv6の概要",
      "question": "IPv6アドレス「2001:0DB8:0000:0000:0000:0000:0000:0001」の正しい省略方法を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "2001:0DB8::1",
        "2001:DB8::1",
        "2001::DB8::1",
        "2001:DB8:0:0:0:0:0:1"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0041.jpg",
      "answer_image": "page_0024.png",
      "explanation": "IPv6アドレスの省略では、先頭のゼロを省略し、連続するゼロのグループを::で一度だけ表現できます。"
    },
    {
      "id": 77,
      "category": "スタティックルーティングの設定",
      "question": "R1の静的ルートをデフォルト以外の管理距離でネットワーク192.168.3.0/24に設定するコマンドを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ip route 5 192.168.3.0 255.255.255.0 192.168.2.2",
        "ip route 192.168.3.0 255.255.255.0 192.168.2.2 1",
        "ip route 1 192.168.3.1 255.255.255.0 192.168.2.2",
        "ip route 192.168.3.0 255.255.255.0 192.168.2.2 5"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0042.jpg",
      "answer_image": "page_0025.png",
      "has_diagram": true,
      "explanation": "スタティックルートでデフォルト以外の管理距離を設定するには、コマンドの最後にAD値を指定します。正しい構文は「ip route [宛先ネットワーク] [サブネットマスク] [ネクストホップ] [AD値]」です。"
    },
    {
      "id": 78,
      "category": "スタティックルーティングの設定",
      "question": "宛先IPアドレス10.10.1.22のパケットを転送するためにどのスタティックルートを選択しますか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ip route 10.10.1.20 255.255.255.254 10.10.255.1",
        "ip route 10.10.1.0 255.255.255.240 10.10.255.1",
        "ip route 10.10.1.16 255.255.255.252 10.10.255.1",
        "ip route 10.10.1.20 255.255.255.252 10.10.255.1"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0042.jpg",
      "answer_image": "page_0025.png",
      "explanation": "10.10.1.22を含むサブネットは10.10.1.20/30(255.255.255.252)です。このサブネットには10.10.1.20-10.10.1.23が含まれます。"
    },
    {
      "id": 79,
      "category": "スタティックルーティングの設定",
      "question": "R1は、ルーティングテーブルエントリが一致しないすべてのトラフィックを192.168.1.1に送信する必要があります。このタスクを実行する構成はどれですか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "C",
        "A",
        "B",
        "D"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0043.jpg",
      "answer_image": "page_0025.png",
      "explanation": "デフォルトルートを設定するには、ip route 192.168.1.1 0.0.0.0 0.0.0.0コマンドを使用します。これにより、すべての不明な宛先トラフィックが指定されたネクストホップに転送されます。"
    },
    {
      "id": 80,
      "category": "スタティックルーティングの設定",
      "question": "フローティングスタティックルートが設定されている場合、プライマリルートに障害が発生したときにバックアップルートが使用されることを保証するアクションを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "バックアップルートがセカンダリになるように、プライマリルートでアドミニストレーティブディスタンスを大きくする",
        "フローティングスタティックルートは、バックアップとして使用されるように、プライマリルートよりもアドミニストレーティブディスタンスを大きくする",
        "負荷分散を構成する",
        "バックアップルートでメトリック値を小さくする"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0043.jpg",
      "answer_image": "page_0025.png",
      "explanation": "フローティングスタティックルートは、プライマリルートよりも大きいAD値を設定することで、バックアップとして機能します。プライマリが停止した場合のみルーティングテーブルに追加されます。"
    },
    {
      "id": 81,
      "category": "スタティックルーティングの設定",
      "question": "フローティングスタティックルートを設定する理由として適切なものを、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "プライマリパスがダウンしたときにトラフィックをセカンダリパスに自動的にルーティングする",
        "ルータから送信されるトラフィックのリターンパスを制御する",
        "パケットの送信元IPに基づいて異なる方法でトラフィックをルーティングする",
        "静的ルーティングによる負荷分散をサポートする",
        "ダイナミックルーティングプロトコルが失敗したときにフォールバック静的ルーティングを有効にする"
      ],
      "correct_answers": [0, 4],
      "answer_count": 2,
      "question_image": "0044.jpg",
      "answer_image": "page_0026.png",
      "explanation": "フローティングスタティックルートは、プライマリパスの障害時の自動フェイルオーバーと、ダイナミックルーティングプロトコルの障害時のバックアップとして使用されます。"
    },
    {
      "id": 82,
      "category": "スタティックルーティングの設定",
      "question": "図を見て答えなさい。R2が、宛先ネットワーク10.1.1.0/24に到達するために選択するプロトコルはどれですか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "スタティック(静的)",
        "eBGP",
        "OSPF",
        "EIGRP"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0044.jpg",
      "answer_image": "page_0026.png",
      "has_diagram": true,
      "explanation": "スタティックルート(ip route)のAD値は1で、他のダイナミックルーティングプロトコルよりも優先されます。"
    },
    {
      "id": 83,
      "category": "スタティックルーティングの設定",
      "question": "以下のコマンドを実行した後の説明として正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "コマンドが入力できない",
        "既存のデフォルトルートを上書きする",
        "負荷分散が構成される",
        "ルーティングテーブルに情報がインストールされず、メイン経路がダウンした場合のみ利用される"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0045.jpg",
      "answer_image": "page_0026.png",
      "has_diagram": true,
      "explanation": "AD値120を持つデフォルトルートは、より小さいAD値を持つルートがダウンした場合のみルーティングテーブルにインストールされます。"
    },
    {
      "id": 84,
      "category": "スタティックルーティングの設定",
      "question": "図のような構成でR1 Lo0とR3 Lo0間で通信するためには、R2でスタティックルートをどのように設定すればよいですか、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "ipv6 route 2000::1/128 2012::2",
        "ipv6 route 2000::1/128 2012::1",
        "ipv6 route 2000::1/128 gi0/1",
        "ipv6 route 2000::3/128 2023::3",
        "ipv6 route 2000::3/128 gi0/0"
      ],
      "correct_answers": [1, 3],
      "answer_count": 2,
      "question_image": "0045.jpg",
      "answer_image": "page_0026.png",
      "has_diagram": true,
      "explanation": "R2からR1のLoopback0(2000::1/128)へは2012::1経由、R3のLoopback0(2000::3/128)へは2023::3経由のスタティックルートを設定します。"
    },
    {
      "id": 85,
      "category": "スタティックルーティングの設定",
      "question": "図のような構成において、以下の条件を満たすためにR1で設定すべき項目を、次の選択肢の中から2つ選びなさい。・2001:12:23::/64宛てのパケットは、R2を通る・2001:12:23::1/64宛てのパケットは、R3を通る",
      "choices": [
        "ipv6 route 2001:12:23::/128 fd00:1:2::2",
        "ipv6 route 2001:12:23::/64 fd00:1:2::2",
        "ipv6 route 2001:12:23::1/128 fd00:1:3::3",
        "ipv6 route 2001:12:23::1/64 fd00:1:2::2",
        "ipv6 route 2001:12:23::1/64 fd00:12:2 200"
      ],
      "correct_answers": [1, 2],
      "answer_count": 2,
      "question_image": "0046.jpg",
      "answer_image": "page_0027.png",
      "has_diagram": true,
      "explanation": "ネットワーク全体(2001:12:23::/64)へはR2経由、特定のホスト(2001:12:23::1/128)へはR3経由のルートを設定します。最長プレフィックスマッチにより、より具体的なルートが優先されます。"
    },
    {
      "id": 86,
      "category": "VLANとトランクの実装",
      "question": "図のような構成において音声及びデータトラフィックを扱うための適切な設定を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "B",
        "A",
        "C",
        "D"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0047.jpg",
      "answer_image": "page_0027.png",
      "has_diagram": true,
      "explanation": "音声とデータを分離するには、インターフェイスをトランクモードに設定し、データVLAN(300)をトランクVLANとして、音声VLAN(400)をvoice vlanとして設定します。"
    },
    {
      "id": 87,
      "category": "VLANとトランクの実装",
      "question": "ネットワーク管理者は下記のようにVoice VLANを設定しています。スイッチのGi1/1/1にCisco IP Phoneを接続した場合、IP Phoneのフレームをどのように扱いますか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "IP PhoneはVLAN50内で音声データを送受信する。IP Phoneに接続されているホストはVLAN1内でデータを送受信する",
        "IP PhoneとIP Phoneに接続されているホストはともにVLANへ接続できない",
        "IP PhoneとIP Phoneに接続されているホストはともにVLAN50内でデータを送受信する",
        "IP PhoneはVLAN50内で音声データを送受信する。IP Phoneに接続されているホストはVLANへ接続できない"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0048.jpg",
      "answer_image": "page_0027.png",
      "explanation": "Voice VLANを設定すると、IP Phoneは指定されたVLAN(50)で音声を送信し、接続されているPCはアクセスVLAN(デフォルトVLAN1)でデータを送信します。"
    },
    {
      "id": 88,
      "category": "VLANとトランクの実装",
      "question": "Voice VLANが設定されているかを確認するコマンドを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "show cdp neighbor",
        "show interface trunk",
        "show ip interface brief",
        "show interface fa0/2 switchport"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0048.jpg",
      "answer_image": "page_0027.png",
      "explanation": "show interface [インターフェイス] switchportコマンドで、Voice VLANの設定を含むスイッチポートの詳細情報を確認できます。"
    },
    {
      "id": 89,
      "category": "VLANとトランクの実装",
      "question": "SW1で、インターフェイスGi0/1とGi0/2を設定する必要があります。PC1とPC2はデータVLANに含める必要があり、IP-Phoneは音声VLANに含める必要があります。要件を満たす設定を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "B",
        "A",
        "C",
        "D"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0049.jpg",
      "answer_image": "page_0028.png",
      "has_diagram": true,
      "explanation": "Gi0/1はPC2用にアクセスモードでVLAN4を設定し、Gi0/2はIP-Phone用にトランクモードでVLAN4とVLAN5を設定します。"
    },
    {
      "id": 90,
      "category": "VLANとトランクの実装",
      "question": "複数のスイッチでVLAN設定を共有するためのプロトコルとして正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "CDP",
        "DTP",
        "VTP",
        "STP"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0050.jpg",
      "answer_image": "page_0028.png",
      "explanation": "VTP(VLAN Trunking Protocol)は、複数のスイッチ間でVLAN設定情報を同期するために使用されます。"
    },
    {
      "id": 91,
      "category": "VLANとトランクの実装",
      "question": "トランクになりうるスイッチポートの設定モードを、次の選択肢の中から3つ選びなさい。",
      "choices": [
        "desirable",
        "forwarding",
        "auto",
        "negotiate",
        "trunk",
        "transparent"
      ],
      "correct_answers": [0, 2, 4],
      "answer_count": 3,
      "question_image": "0050.jpg",
      "answer_image": "page_0028.png",
      "explanation": "DTPを使用したトランクネゴシエーションのモードには、trunk(常時トランク)、desirable(積極的にトランクを要求)、auto(相手の要求に応じる)があります。"
    },
    {
      "id": 92,
      "category": "VLANとトランクの実装",
      "question": "エンジニアであるあなたは、隣接するスイッチとアクティブにトランクリンクを形成できるようなインタフェースを計画しています。インタフェースにはどのコマンドを設定しますか、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "switchport mode dynamic desirable",
        "switchport mode trunk",
        "switchport mode dynamic auto",
        "switchport no negotiation"
      ],
      "correct_answers": [0, 1],
      "answer_count": 2,
      "question_image": "0050.jpg",
      "answer_image": "page_0028.png",
      "explanation": "アクティブにトランクを形成するには、switchport mode trunkで固定トランクにするか、switchport mode dynamic desirableで積極的にトランクをネゴシエートします。"
    },
    {
      "id": 93,
      "category": "VLANとトランクの実装",
      "question": "PC AとServer間の通信ができるようにするために、SW-Aの設定をどのように変更すればよいですか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "switchport trunk allowed vlan none",
        "switchport trunk allowed vlan remove 10-11",
        "switchport trunk allowed vlan 12",
        "switchport trunk allowed vlan add 13"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0051.jpg",
      "answer_image": "page_0029.png",
      "has_diagram": true,
      "explanation": "SW-AのトランクポートでVLAN13を許可する必要があります。switchport trunk allowed vlan add 13コマンドで既存の設定にVLAN13を追加します。"
    },
    {
      "id": 94,
      "category": "VLANとトランクの実装",
      "question": "エンジニアであるあなたは、トランクリンクを通過するVLAN10のトラフィックにタグ付けしないように設定する必要があります。どのコマンドを使用すればよいですか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "switchport trunk encapsulation dot1q",
        "switchport trunk allowed vlan 10",
        "switchport mode trunk",
        "switchport trunk native vlan 10"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0051.jpg",
      "answer_image": "page_0029.png",
      "explanation": "Native VLANのトラフィックはタグなしで送信されます。switchport trunk native vlan 10コマンドでVLAN10をネイティブVLANに設定します。"
    },
    {
      "id": 95,
      "category": "VLANとトランクの実装",
      "question": "2台のSW間の接続の構成として正しい説明を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "トランクは形成されるが、VLAN 99とVLAN 999はシャットダウン状態",
        "トランクは形成されず、ポートはerr-disabled",
        "トランクは形成されるが、一致しないネイティブVLANは単一のブロードキャストドメインにマージされる",
        "トランクは形成され、VLAN 99とVLAN 999はリンクを通過できる"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0052.jpg",
      "answer_image": "page_0029.png",
      "has_diagram": true,
      "explanation": "両方のスイッチでトランク設定とencapsulation dot1qが一致し、VLAN 99と999がallowed vlanリストに含まれているため、トランクは正常に形成されます。"
    },
    {
      "id": 96,
      "category": "VLANとトランクの実装",
      "question": "以下のようにスイッチが設定されています。スイッチ間リンクの適切な動作モードを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "アクセス",
        "トランク",
        "err-disabled",
        "リンクダウン"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0052.jpg",
      "answer_image": "page_0029.png",
      "has_diagram": true,
      "explanation": "Switch1がdynamic desirable、Switch2がdynamic autoの場合、DTPネゴシエーションによりトランクリンクが形成されます。"
    },
    {
      "id": 97,
      "category": "VLANとトランクの実装",
      "question": "ホスト同士がスイッチ間で通信できない理由として考えられるものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ネイティブVLANの不一致",
        "アクセスポートになっている",
        "インタフェースがシャットダウン",
        "すべてのVLANがトランクで有効になっていない"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0053.jpg",
      "answer_image": "page_0030.png",
      "has_diagram": true,
      "explanation": "Switch1のネイティブVLANは999、Switch2のネイティブVLANは99で不一致です。ネイティブVLANの不一致により、VLAN1のトラフィックが正しく転送されません。"
    },
    {
      "id": 98,
      "category": "VLANとトランクの実装",
      "question": "Cisco IP Phoneに接続されたホストから受信したフレームに対するCisco IP Phoneのアクションとして適切なものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ネイティブVLANを使用して送信する",
        "フレームを変換して送信する",
        "アクセスVLANのタグをつける",
        "ドロップする"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0053.jpg",
      "answer_image": "page_0030.png",
      "explanation": "IP Phoneに接続されたPCからのデータフレームは、ネイティブVLAN(通常はアクセスVLAN)を使用してタグなしで転送されます。"
    },
    {
      "id": 99,
      "category": "VLANとトランクの実装",
      "question": "スイッチ1とスイッチ2の間でVLAN 76トラフィックのタグ付けを解除し、他のすべてのVLANはタグ付けしたままにしたい。適切なコマンドを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "switchport private-vlan association host 76",
        "switchport access vlan 76",
        "switchport trunk allowed vlan 76",
        "switchport trunk native vlan 76"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0054.jpg",
      "answer_image": "page_0030.png",
      "has_diagram": true,
      "explanation": "Native VLANに指定されたVLANはタグなしで送信されます。switchport trunk native vlan 76コマンドで設定します。"
    },
    {
      "id": 100,
      "category": "VLANとトランクの実装",
      "question": "図を見て答えなさい。タグなしフレームがGigabit Ethernet0/1インタフェースで受信された場合、SW1はどのように動作しますか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "タグなしフレームは、VLAN1のトラフィックとして処理される",
        "タグなしフレームは、VLAN11のトラフィックとして処理される",
        "タグなしフレームは、VLAN6のトラフィックとして処理される",
        "タグなしフレームはドロップされる"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0054.jpg",
      "answer_image": "page_0030.png",
      "has_diagram": true,
      "explanation": "トランクポートで受信したタグなしフレームは、Native VLAN(この場合VLAN6)のトラフィックとして処理されます。"
    },
    {
      "id": 101,
      "category": "VLAN 間のルーティング",
      "question": "図のVLAN間ルーティングについて正しい説明を、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "RouterにはVLAN10とVLAN20インタフェースを作成しなければならない",
        "Routerを導入してもPC aとPC b間の通信は不可能である",
        "RouterのGi0/0とSwitch AのGi0/24のトランクのカプセル化タイプは合致していなければいけない",
        "PC aとPC bには同じデフォルトゲートウェイアドレスを設定する",
        "RouterとSwitch Aの接続ケーブルにはクロスオーバーケーブルを使用する",
        "RouterのGi0/0にはサブインタフェースを設定しなければならない"
      ],
      "correct_answers": [2, 5],
      "answer_count": 2,
      "question_image": "0055.jpg",
      "answer_image": "page_0030.png",
      "has_diagram": true,
      "explanation": "Router-on-a-Stick構成では、ルータとスイッチ間のトランクカプセル化タイプを一致させ、ルータに各VLAN用のサブインタフェースを作成する必要があります。"
    },
    {
      "id": 102,
      "category": "OSPFの概要",
      "question": "ルーティングプロトコルに関する正しい説明を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ディスタンスベクタールーティングプロトコルはSPFアルゴリズムを使用する",
        "OSPFはリンクステートルーティングプロトコルである",
        "IS-ISはディスタンスベクタールーティングプロトコルである",
        "リンクステートルーティングプロトコルは宛先までのホップ数で経路を選択する"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0055.jpg",
      "answer_image": "page_0031.png",
      "explanation": "OSPFはリンクステートルーティングプロトコルで、ネットワークトポロジ全体を把握してSPFアルゴリズムで最短経路を計算します。"
    },
    {
      "id": 103,
      "category": "OSPFの概要",
      "question": "このルータのルータIDとして適切なものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "1.1.1.1",
        "192.168.10.2",
        "192.168.20.1",
        "172.16.1.1"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0056.jpg",
      "answer_image": "page_0031.png",
      "has_diagram": true,
      "explanation": "OSPFのルータIDは、Loopbackインタフェースがある場合、その中で最も大きいIPアドレスが選択されます。この場合、Loopback0の1.1.1.1が選択されます。"
    },
    {
      "id": 104,
      "category": "OSPFの概要",
      "question": "OSPFルータIDコマンドを使用してルータを構成しました。しかしながら、依然として物理インタフェースのIPアドレスがルータIDとして使われています。この問題をネットワークへの影響がより小さい方法で修正するためには、どのアクションがふさわしいですか？次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ルータの構成を保存する",
        "ループバックアドレスを指定する",
        "ルータを再起動する",
        "OSPFプロセスをリロードする"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0056.jpg",
      "answer_image": "page_0031.png",
      "explanation": "OSPFプロセスをリロード(clear ip ospf process)することで、ルータID変更を反映できます。これはルータ再起動よりも影響が小さい方法です。"
    },
    {
      "id": 105,
      "category": "OSPFの概要",
      "question": "OSPFにおいて、LoopbackインタフェースやDR的なルータIDの設定がされていない場合、ルータIDはどのように決定されますか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "最も小さいIPアドレスにを加算した値がルータIDとなる",
        "ルータIDが設定されるまで、OSPFプロトコルは動作しない",
        "up/upしている物理インタフェースのうち、最も大きいアドレスがルータIDに選ばれる",
        "0.0.0.0がルータIDとなる"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0056.jpg",
      "answer_image": "page_0031.png",
      "explanation": "Loopbackインタフェースがない場合、up/up状態の物理インタフェースの中で最も大きいIPアドレスがルータIDとして選択されます。"
    },
    {
      "id": 106,
      "category": "OSPFの概要",
      "question": "OSPFのネイバー構成について適切な組み合わせを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "A① B① C② D② E① F該当なし",
        "A② B① C② D① E① F①",
        "A② B① C② D② E① F②",
        "A② B① C② D① E① F該当なし"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0057.jpg",
      "answer_image": "page_0032.png",
      "has_diagram": true,
      "explanation": "OSPFネイバー関係を形成するには、IPアドレス(②一致である)、タイマー(①一致する)、ルータID(②一意である)、エリアID(①一致する)、ネットマスク(①一致する)、プロセスID(①該当なし)が重要です。"
    },
    {
      "id": 107,
      "category": "OSPFの概要",
      "question": "R1とR2では、OSPFネイバーを形成できていません。ネイバーを形成させるためには、どうしたらいいですか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "プライオリティを変更する",
        "ネットワークタイプを変更する",
        "Hello intervalを変更する",
        "プロセスIDを変更する"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0058.jpg",
      "answer_image": "page_0032.png",
      "has_diagram": true,
      "explanation": "R1のHello intervalは10秒、R2は20秒で不一致です。OSPFネイバーを形成するには、Hello intervalとDead intervalが一致している必要があります。"
    },
    {
      "id": 108,
      "category": "OSPFの概要",
      "question": "図のような構成を適用した後、2つのルータでOSPFネイバー関係を確立できません。原因として考えられるものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "OSPFルータIDが一致していない",
        "R2はデフォルトのHelloタイマーを使用している",
        "R1のnetworkステートメントが正しく構成されていない",
        "OSPFのプロセスIDが一致していない"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0059.jpg",
      "answer_image": "page_0032.png",
      "has_diagram": true,
      "explanation": "R1のnetworkステートメントが正しく設定されていないため、OSPFがインタフェースで有効化されていません。"
    },
    {
      "id": 109,
      "category": "OSPFの概要",
      "question": "R1とR3の間にOSPFネイバー関係を構成する必要があります。認証が構成され、各ルータのインターフェイスは同じ192.168.1.0/30サブネットに接続されています。構成を完了するための次のステップとして適切なものを、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "HelloタイマーとDeadタイマーを両側で一致するように設定する",
        "両方のインターフェイスでOSPFアクティブとして構成する",
        "各ルータのOSPFプロセスに同じプロセスIDを構成する",
        "各ルータのOSPFプロセスに同じルータIDを構成する",
        "両方のインターフェイスを同じエリアIDで構成する"
      ],
      "correct_answers": [1, 4],
      "answer_count": 2,
      "question_image": "0059.jpg",
      "answer_image": "page_0032.png",
      "explanation": "OSPFネイバーを形成するには、両方のインターフェイスでOSPFを有効化し、同じエリアIDを設定する必要があります。"
    },
    {
      "id": 110,
      "category": "OSPFの概要",
      "question": "OSPFがネットワークへの複数のパスを学習した場合、どのようにルートを選択しますか？適切なものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "参照帯域幅を実際の帯域幅で除算した最小コストの合計",
        "K値に256を掛けて、最小メトリックのルートを計算",
        "ホップカウント",
        "インタフェースごとに、ソースルーターから宛先にメトリックを追加して、帯域幅が最小のルートを計算"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0060.jpg",
      "answer_image": "page_0032.png",
      "explanation": "OSPFは参照帯域幅を実際の帯域幅で除算してコストを計算し、最小コストの合計を持つパスを選択します。"
    },
    {
      "id": 111,
      "category": "OSPFの概要",
      "question": "R1をDRとして選択されるようにするには、どの設定が必要ですか。正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "R1に固定のOSPFルータIDを設定する",
        "R1に、3つのルータの中で最も小さいOSPF優先度を設定する",
        "R2とR3を、R1のOSPFネイバーとして設定する",
        "R1のインターフェイスに最も大きいOSPFプライオリティ値を設定する"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0060.jpg",
      "answer_image": "page_0033.png",
      "explanation": "DR選出では、最も高いOSPFプライオリティ値を持つルータが選択されます。プライオリティが同じ場合は、最も高いルータIDを持つルータが選択されます。"
    },
    {
      "id": 112,
      "category": "OSPFの概要",
      "question": "OSPF指定ルータとして構成しました。指定ルータが適切なモードであることを確認できる状態を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "初期化",
        "双方向",
        "FULL",
        "交換"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0060.jpg",
      "answer_image": "page_0033.png",
      "explanation": "OSPFネイバー状態がFULLになると、DRとの完全な隣接関係が確立され、LSDBが完全に同期されたことを示します。"
    },
    {
      "id": 113,
      "category": "OSPFの概要",
      "question": "図のような構成において、R4とR5がDR、BDRのいずれにも選出されないようにするために最も適切な設定コマンドを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "A",
        "D",
        "B",
        "C"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0061.jpg",
      "answer_image": "page_0033.png",
      "has_diagram": true,
      "explanation": "DR/BDR選出から除外するには、OSPFプライオリティを0に設定します。R4とR5で「ip ospf priority 120」と「ip ospf priority 110」を設定すると、これらのルータが優先的にDR/BDRに選出されます。"
    },
    {
      "id": 114,
      "category": "OSPFの概要",
      "question": "ルータのギガビットイーサネットのインタフェースでOSPFを有効化したときのOSPFネットワークタイプのデフォルトを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "非ブロードキャスト",
        "ブロードキャスト",
        "ポイントツーポイント",
        "ポイントツーマルチポイント"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0061.jpg",
      "answer_image": "page_0033.png",
      "explanation": "イーサネットインタフェースのOSPFネットワークタイプのデフォルトはブロードキャストです。"
    },
    {
      "id": 115,
      "category": "OSPFの概要",
      "question": "PPPプロトコルを有効化したインタフェースのOSPFのネットワークタイプを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ポイントツーポイント",
        "ブロードキャスト",
        "非ブロードキャスト",
        "ポイントツーマルチポイント"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0062.jpg",
      "answer_image": "page_0033.png",
      "explanation": "PPPなどのポイントツーポイントリンクでは、OSPFネットワークタイプはポイントツーポイントになります。"
    },
    {
      "id": 116,
      "category": "OSPFの概要",
      "question": "R1とR2の間でOSPFを構成します。DR/BDRとして選択されないようにするためにR1で必要な設定を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "D",
        "A",
        "C",
        "B"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0062.jpg",
      "answer_image": "page_0034.png",
      "has_diagram": true,
      "explanation": "ポイントツーポイントリンクではDR/BDRは不要です。ip ospf cost 0を設定することで、OSPFネットワークタイプをポイントツーポイントに変更し、DR/BDR選出を回避できます。"
    },
    {
      "id": 117,
      "category": "OSPFの概要",
      "question": "R2からインターネットにアクセスできません。修正するのに適切なものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "R2でRIPを有効にする",
        "R2でdefault-information originate alwaysを設定する",
        "R1でip route 0.0.0.0 0.0.0.0 1.1.1.1を設定する",
        "R1のインターネット側のインタフェースでOSPFを有効にする"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0063.jpg",
      "answer_image": "page_0034.png",
      "has_diagram": true,
      "explanation": "R1でdefault-information originate alwaysコマンドを使用すると、デフォルトルートをOSPFで配布できます。これによりR2はインターネットにアクセスできるようになります。"
    },
    {
      "id": 118,
      "category": "兄弟スイッチド トポロジの構築",
      "question": "図のようなスイッチネットワークにおいて、ルートブリッジに選出されるスイッチはどれですか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "SWB",
        "SWA",
        "SWC",
        "SWD"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0064.jpg",
      "answer_image": "page_0034.png",
      "has_diagram": true,
      "explanation": "STPルートブリッジは最小のブリッジID(プライオリティ+MACアドレス)を持つスイッチが選出されます。SWAのプライオリティ(614440)が最も低いため、SWAがルートブリッジになります。"
    },
    {
      "id": 119,
      "category": "兄弟スイッチド トポロジの構築",
      "question": "どのスイッチがSTPのルートブリッジに選出されますか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "32769: 33-44-55-66-77-99",
        "32768: 11-22-33-44-55-66",
        "32768: 33-44-55-66-77-88",
        "32769: 11-22-33-44-55-55"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0064.jpg",
      "answer_image": "page_0034.png",
      "explanation": "最小のプライオリティ(32768)を持つスイッチの中で、最小のMACアドレス(11-22-33-44-55-66)を持つスイッチがルートブリッジになります。"
    },
    {
      "id": 120,
      "category": "兄弟スイッチド トポロジの構築",
      "question": "PVST+とRPVST+の特徴として適切な説明を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "PVST＋はCisco独自規格である",
        "RPVST+の方がPVST+よりコンバージェンスが速い",
        "PVST+は802.1sベース、RPVST+は802.1wベース",
        "PVST+は802.1sベース、RPVST+は802.1Dベース"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0064.jpg",
      "answer_image": "page_0034.png",
      "explanation": "RPVST+(Rapid Per-VLAN Spanning Tree Plus)は、PVST+よりも高速なコンバージェンスを提供します。PVST+は802.1Dベース、RPVST+は802.1wベースです。"
    }
  ]
};

// ===============================================================================
// NOTE: This file currently contains 120 questions out of 267 total.
// Questions are distributed across images 0007.jpg through 0123.jpg
// Total questions: 問題1 through 問題267
//
// COMPLETED: Questions 1-120 (120 questions complete)
// REMAINING WORK: Questions 121-267 need to be added (147 questions remaining)
//
// Each question follows this structure:
// {
//   "id": sequential question number (1-267),
//   "category": topic category from the question header,
//   "question": the question text in Japanese,
//   "choices": array of choice strings,
//   "correct_answers": array of 0-indexed correct choice indices,
//   "answer_count": number of correct answers to select (1, 2, 3, etc.),
//   "question_image": filename like "0XXX.jpg",
//   "answer_image": filename like "page_XXXX.png",
//   "has_diagram": (optional) true if question includes a diagram/figure,
//   "explanation": explanation text in Japanese
// }
//
// Categories seen so far:
// - ネットワーキングの機能について
// - TCP/IP リンク レイヤについて
// - TCP/IP インターネット レイヤ、IPv4アドレシング、およびサブネットの概要
// - TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明
// - ルーティングの機能について
// - Ciscoルータの設定
// - 簡易ネットワークのトラブルシューティング
// - 基本的なIPv6の概要
// - スタティックルーティングの設定
// - VLANとトランクの実装
// - VLAN 間のルーティング
// - OSPFの概要
// - 兄弟スイッチド トポロジの構築
//
// To continue adding questions:
// 1. Read the remaining images (0065.jpg onwards)
// 2. Extract question number and category from the header
// 3. Extract question text and all choices
// 4. Identify correct answer count from "正解を X つ選択" header
// 5. Map to appropriate answer image file (page_XXXX.png)
// 6. Add explanation based on the answer key
// ===============================================================================
