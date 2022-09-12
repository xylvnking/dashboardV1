"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{19:function(a,b,c){c.d(b,{IO:function(){return hm},JU:function(){return gJ},PL:function(){return hx},ad:function(){return gL},ar:function(){return ho},hJ:function(){return gI},pl:function(){return hy},r7:function(){return hz}});var d,e,f=c(5816),g=c(8463),h=c(3333),i=c(4444),j=c(3510),k=c(3454);let l="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */ class m{constructor(a){this.uid=a}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(a){return a.uid===this.uid}}m.UNAUTHENTICATED=new m(null),m.GOOGLE_CREDENTIALS=new m("google-credentials-uid"),m.FIRST_PARTY=new m("first-party-uid"),m.MOCK_USER=new m("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let n="9.9.4",o=new h.Yd("@firebase/firestore");function p(){return o.logLevel}function q(a,...b){if(o.logLevel<=h.in.DEBUG){let c=b.map(t);o.debug(`Firestore (${n}): ${a}`,...c)}}function r(a,...b){if(o.logLevel<=h.in.ERROR){let c=b.map(t);o.error(`Firestore (${n}): ${a}`,...c)}}function s(a,...b){if(o.logLevel<=h.in.WARN){let c=b.map(t);o.warn(`Firestore (${n}): ${a}`,...c)}}function t(a){var b;if("string"==typeof a)return a;try{return b=a,JSON.stringify(b)}catch(c){return a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function u(a="Unexpected state"){let b=`FIRESTORE (${n}) INTERNAL ASSERTION FAILED: `+a;throw r(b),Error(b)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends i.ZR{constructor(a,b){super(a,b),this.code=a,this.message=b,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class x{constructor(){this.promise=new Promise((a,b)=>{this.resolve=a,this.reject=b})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class y{constructor(a,b){this.user=b,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${a}`)}}class z{getToken(){return Promise.resolve(null)}invalidateToken(){}start(a,b){a.enqueueRetryable(()=>b(m.UNAUTHENTICATED))}shutdown(){}}class A{constructor(a){this.t=a,this.currentUser=m.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(a,b){let c=this.i,d=a=>this.i!==c?(c=this.i,b(a)):Promise.resolve(),e=new x;this.o=()=>{this.i++,this.currentUser=this.u(),e.resolve(),e=new x,a.enqueueRetryable(()=>d(this.currentUser))};let f=()=>{let b=e;a.enqueueRetryable(async()=>{await b.promise,await d(this.currentUser)})},g=a=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),f()};this.t.onInit(a=>g(a)),setTimeout(()=>{if(!this.auth){let a=this.t.getImmediate({optional:!0});a?g(a):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),e.resolve(),e=new x)}},0),f()}getToken(){let a=this.i,b=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(b).then(b=>{var c;return this.i!==a?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):b?("string"==typeof b.accessToken||u(),new y(b.accessToken,this.currentUser)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){var a;let b=this.auth&&this.auth.getUid();return null===b||"string"==typeof b||u(),new m(b)}}class B{constructor(a,b,c,d){this.h=a,this.l=b,this.m=c,this.g=d,this.type="FirstParty",this.user=m.FIRST_PARTY,this.p=new Map}I(){var a;return this.g?this.g():(("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)&&u(),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);let a=this.I();return a&&this.p.set("Authorization",a),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class C{constructor(a,b,c,d){this.h=a,this.l=b,this.m=c,this.g=d}getToken(){return Promise.resolve(new B(this.h,this.l,this.m,this.g))}start(a,b){a.enqueueRetryable(()=>b(m.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class D{constructor(a){this.value=a,this.type="AppCheck",this.headers=new Map,a&&a.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class E{constructor(a){this.T=a,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(a,b){let c=a=>{null!=a.error&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);let c=a.token!==this.A;return this.A=a.token,q("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?b(a.token):Promise.resolve()};this.o=b=>{a.enqueueRetryable(()=>c(b))};let d=a=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.appCheck.addTokenListener(this.o)};this.T.onInit(a=>d(a)),setTimeout(()=>{if(!this.appCheck){let a=this.T.getImmediate({optional:!0});a?d(a):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let a=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(a).then(a=>{var b;return a?("string"==typeof a.token||u(),this.A=a.token,new D(a.token)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */ function F(a){let b="undefined"!=typeof self&&(self.crypto||self.msCrypto),c=new Uint8Array(a);if(b&&"function"==typeof b.getRandomValues)b.getRandomValues(c);else for(let d=0;d<a;d++)c[d]=Math.floor(256*Math.random());return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class G{static R(){let a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",b=Math.floor(256/a.length)*a.length,c="";for(;c.length<20;){let d=F(40);for(let e=0;e<d.length;++e)c.length<20&&d[e]<b&&(c+=a.charAt(d[e]%a.length))}return c}}function H(a,b){return a<b?-1:a>b?1:0}function I(a,b,c){return a.length===b.length&&a.every((a,d)=>c(a,b[d]))}function J(a){return a+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // The earliest date supported by Firestore timestamps (0001-01-01T00:00:00Z).
/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * For examples and further specifications, refer to the
 * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
 */ class K{constructor(a,b){if(this.seconds=a,this.nanoseconds=b,b<0||b>=1e9)throw new w(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+b);if(a< -62135596800||a>=253402300800)throw new w(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+a)}static now(){return K.fromMillis(Date.now())}static fromDate(a){return K.fromMillis(a.getTime())}static fromMillis(a){let b=Math.floor(a/1e3);return new K(b,Math.floor(1e6*(a-1e3*b)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(a){return this.seconds===a.seconds?H(this.nanoseconds,a.nanoseconds):H(this.seconds,a.seconds)}isEqual(a){return a.seconds===this.seconds&&a.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let a=this.seconds- -62135596800;return String(a).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */ class L{constructor(a){this.timestamp=a}static fromTimestamp(a){return new L(a)}static min(){return new L(new K(0,0))}static max(){return new L(new K(253402300799,999999999))}compareTo(a){return this.timestamp._compareTo(a.timestamp)}isEqual(a){return this.timestamp.isEqual(a.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Path represents an ordered sequence of string segments.
 */ class M{constructor(a,b,c){void 0===b?b=0:b>a.length&&u(),void 0===c?c=a.length-b:c>a.length-b&&u(),this.segments=a,this.offset=b,this.len=c}get length(){return this.len}isEqual(a){return 0===M.comparator(this,a)}child(a){let b=this.segments.slice(this.offset,this.limit());return a instanceof M?a.forEach(a=>{b.push(a)}):b.push(a),this.construct(b)}limit(){return this.offset+this.length}popFirst(a){return a=void 0===a?1:a,this.construct(this.segments,this.offset+a,this.length-a)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(a){return this.segments[this.offset+a]}isEmpty(){return 0===this.length}isPrefixOf(a){if(a.length<this.length)return!1;for(let b=0;b<this.length;b++)if(this.get(b)!==a.get(b))return!1;return!0}isImmediateParentOf(a){if(this.length+1!==a.length)return!1;for(let b=0;b<this.length;b++)if(this.get(b)!==a.get(b))return!1;return!0}forEach(a){for(let b=this.offset,c=this.limit();b<c;b++)a(this.segments[b])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(a,b){let c=Math.min(a.length,b.length);for(let d=0;d<c;d++){let e=a.get(d),f=b.get(d);if(e<f)return -1;if(e>f)return 1}return a.length<b.length?-1:a.length>b.length?1:0}}class N extends M{construct(a,b,c){return new N(a,b,c)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...a){let b=[];for(let c of a){if(c.indexOf("//")>=0)throw new w(v.INVALID_ARGUMENT,`Invalid segment (${c}). Paths must not contain // in them.`);b.push(...c.split("/").filter(a=>a.length>0))}return new N(b)}static emptyPath(){return new N([])}}let O=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class P extends M{construct(a,b,c){return new P(a,b,c)}static isValidIdentifier(a){return O.test(a)}canonicalString(){return this.toArray().map(a=>(a=a.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),P.isValidIdentifier(a)||(a="`"+a+"`"),a)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new P(["__name__"])}static fromServerFormat(a){let b=[],c="",d=0,e=()=>{if(0===c.length)throw new w(v.INVALID_ARGUMENT,`Invalid field path (${a}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);b.push(c),c=""},f=!1;for(;d<a.length;){let g=a[d];if("\\"===g){if(d+1===a.length)throw new w(v.INVALID_ARGUMENT,"Path has trailing escape character: "+a);let h=a[d+1];if("\\"!==h&&"."!==h&&"`"!==h)throw new w(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+a);c+=h,d+=2}else"`"===g?(f=!f,d++):"."!==g||f?(c+=g,d++):(e(),d++)}if(e(),f)throw new w(v.INVALID_ARGUMENT,"Unterminated ` in path: "+a);return new P(b)}static emptyPath(){return new P([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @internal
 */ class Q{constructor(a){this.path=a}static fromPath(a){return new Q(N.fromString(a))}static fromName(a){return new Q(N.fromString(a).popFirst(5))}static empty(){return new Q(N.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(a){return this.path.length>=2&&this.path.get(this.path.length-2)===a}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(a){return null!==a&&0===N.comparator(this.path,a.path)}toString(){return this.path.toString()}static comparator(a,b){return N.comparator(a.path,b.path)}static isDocumentKey(a){return a.length%2==0}static fromSegments(a){return new Q(new N(a.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The initial mutation batch id for each index. Gets updated during index
 * backfill.
 */ /**
 * An index definition for field indexes in Firestore.
 *
 * Every index is associated with a collection. The definition contains a list
 * of fields and their index kind (which can be `ASCENDING`, `DESCENDING` or
 * `CONTAINS` for ArrayContains/ArrayContainsAny queries).
 *
 * Unlike the backend, the SDK does not differentiate between collection or
 * collection group-scoped indices. Every index can be used for both single
 * collection and collection group queries.
 */ class R{constructor(a,b,c,d){this.indexId=a,this.collectionGroup=b,this.fields=c,this.indexState=d}}function S(a){return a.fields.find(a=>2===a.kind)}function T(a){return a.fields.filter(a=>2!==a.kind)}R.UNKNOWN_ID=-1;class U{constructor(a,b){this.fieldPath=a,this.kind=b}}function V(a,b){let c=P.comparator(a.fieldPath,b.fieldPath);return 0!==c?c:H(a.kind,b.kind)}class W{constructor(a,b){this.sequenceNumber=a,this.offset=b}static empty(){return new W(0,Z.min())}}function X(a,b){let c=a.toTimestamp().seconds,d=a.toTimestamp().nanoseconds+1,e=L.fromTimestamp(1e9===d?new K(c+1,0):new K(c,d));return new Z(e,Q.empty(),b)}function Y(a){return new Z(a.readTime,a.key,-1)}class Z{constructor(a,b,c){this.readTime=a,this.documentKey=b,this.largestBatchId=c}static min(){return new Z(L.min(),Q.empty(),-1)}static max(){return new Z(L.max(),Q.empty(),-1)}}function $(a,b){let c=a.readTime.compareTo(b.readTime);return 0!==c?c:0!==(c=Q.comparator(a.documentKey,b.documentKey))?c:H(a.largestBatchId,b.largestBatchId)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let _="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aa{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(a){this.onCommittedListeners.push(a)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(a=>a())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err - An error returned by a LocalStore operation.
 * @returns A Promise that resolves after we recovered, or the original error.
 */ async function ab(a){if(a.code!==v.FAILED_PRECONDITION||a.message!==_)throw a;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * PersistencePromise is essentially a re-implementation of Promise except
 * it has a .next() method instead of .then() and .next() and .catch() callbacks
 * are executed synchronously when a PersistencePromise resolves rather than
 * asynchronously (Promise implementations use setImmediate() or similar).
 *
 * This is necessary to interoperate with IndexedDB which will automatically
 * commit transactions if control is returned to the event loop without
 * synchronously initiating another operation on the transaction.
 *
 * NOTE: .then() and .catch() only allow a single consumer, unlike normal
 * Promises.
 */ class ac{constructor(a){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,a(a=>{this.isDone=!0,this.result=a,this.nextCallback&&this.nextCallback(a)},a=>{this.isDone=!0,this.error=a,this.catchCallback&&this.catchCallback(a)})}catch(a){return this.next(void 0,a)}next(a,b){return this.callbackAttached&&u(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(b,this.error):this.wrapSuccess(a,this.result):new ac((c,d)=>{this.nextCallback=b=>{this.wrapSuccess(a,b).next(c,d)},this.catchCallback=a=>{this.wrapFailure(b,a).next(c,d)}})}toPromise(){return new Promise((a,b)=>{this.next(a,b)})}wrapUserFunction(a){try{let b=a();return b instanceof ac?b:ac.resolve(b)}catch(c){return ac.reject(c)}}wrapSuccess(a,b){return a?this.wrapUserFunction(()=>a(b)):ac.resolve(b)}wrapFailure(a,b){return a?this.wrapUserFunction(()=>a(b)):ac.reject(b)}static resolve(a){return new ac((b,c)=>{b(a)})}static reject(a){return new ac((b,c)=>{c(a)})}static waitFor(a){return new ac((b,c)=>{let d=0,e=0,f=!1;a.forEach(a=>{++d,a.next(()=>{++e,f&&e===d&&b()},a=>c(a))}),f=!0,e===d&&b()})}static or(a){let b=ac.resolve(!1);for(let c of a)b=b.next(a=>a?ac.resolve(a):c());return b}static forEach(a,b){let c=[];return a.forEach((a,d)=>{c.push(b.call(this,a,d))}),this.waitFor(c)}static mapArray(a,b){return new ac((c,d)=>{let e=a.length,f=Array(e),g=0;for(let h=0;h<e;h++){let i=h;b(a[i]).next(a=>{f[i]=a,++g===e&&c(f)},a=>d(a))}})}static doWhile(a,b){return new ac((c,d)=>{let e=()=>{!0===a()?b().next(()=>{e()},d):c()};e()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // References to `window` are guarded by SimpleDb.isAvailable()
/* eslint-disable no-restricted-globals */ /**
 * Wraps an IDBTransaction and exposes a store() method to get a handle to a
 * specific object store.
 */ class ad{constructor(a,b){this.action=a,this.transaction=b,this.aborted=!1,this.P=new x,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{b.error?this.P.reject(new ag(a,b.error)):this.P.resolve()},this.transaction.onerror=b=>{let c=al(b.target.error);this.P.reject(new ag(a,c))}}static open(a,b,c,d){try{return new ad(b,a.transaction(d,c))}catch(e){throw new ag(b,e)}}get v(){return this.P.promise}abort(a){a&&this.P.reject(a),this.aborted||(q("SimpleDb","Aborting transaction:",a?a.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){let a=this.transaction;this.aborted||"function"!=typeof a.commit||a.commit()}store(a){let b=this.transaction.objectStore(a);return new ai(b)}}class ae{constructor(a,b,c){this.name=a,this.version=b,this.S=c,12.2===ae.D(getUA())&&r("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(a){return q("SimpleDb","Removing database:",a),aj(window.indexedDB.deleteDatabase(a)).toPromise()}static C(){if(!isIndexedDBAvailable())return!1;if(ae.N())return!0;let a=getUA(),b=ae.D(a),c=0<b&&b<10,d=ae.k(a),e=0<d&&d<4.5;return!(a.indexOf("MSIE ")>0||a.indexOf("Trident/")>0||a.indexOf("Edge/")>0||c||e)}static N(){var a;return void 0!==k&&"YES"===(null===(a=k.env)|| void 0===a?void 0:a.M)}static O(a,b){return a.store(b)}static D(a){let b=a.match(/i(?:phone|pad|pod) os ([\d_]+)/i),c=b?b[1].split("_").slice(0,2).join("."):"-1";return Number(c)}static k(a){let b=a.match(/Android ([\d.]+)/i),c=b?b[1].split(".").slice(0,2).join("."):"-1";return Number(c)}async F(a){return this.db||(q("SimpleDb","Opening database:",this.name),this.db=await new Promise((b,c)=>{let d=indexedDB.open(this.name,this.version);d.onsuccess=a=>{let c=a.target.result;b(c)},d.onblocked=()=>{c(new ag(a,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},d.onerror=b=>{let d=b.target.error;"VersionError"===d.name?c(new w(v.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===d.name?c(new w(v.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+d)):c(new ag(a,d))},d.onupgradeneeded=a=>{q("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',a.oldVersion);let b=a.target.result;this.S.$(b,d.transaction,a.oldVersion,this.version).next(()=>{q("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=a=>this.B(a)),this.db}L(a){this.B=a,this.db&&(this.db.onversionchange=b=>a(b))}async runTransaction(a,b,c,d){let e="readonly"===b,f=0;for(;;){++f;try{this.db=await this.F(a);let g=ad.open(this.db,a,e?"readonly":"readwrite",c),h=d(g).next(a=>(g.V(),a)).catch(a=>(g.abort(a),ac.reject(a))).toPromise();return h.catch(()=>{}),await g.v,h}catch(i){let j=i,k="FirebaseError"!==j.name&&f<3;if(q("SimpleDb","Transaction failed with error:",j.message,"Retrying:",k),this.close(),!k)return Promise.reject(j)}}}close(){this.db&&this.db.close(),this.db=void 0}}class af{constructor(a){this.U=a,this.q=!1,this.K=null}get isDone(){return this.q}get G(){return this.K}set cursor(a){this.U=a}done(){this.q=!0}j(a){this.K=a}delete(){return aj(this.U.delete())}}class ag extends null{constructor(a,b){super(v.UNAVAILABLE,`IndexedDB transaction '${a}' failed: ${b}`),this.name="IndexedDbTransactionError"}}function ah(a){return"IndexedDbTransactionError"===a.name}class ai{constructor(a){this.store=a}put(a,b){let c;return void 0!==b?(q("SimpleDb","PUT",this.store.name,a,b),c=this.store.put(b,a)):(q("SimpleDb","PUT",this.store.name,"<auto-key>",a),c=this.store.put(a)),aj(c)}add(a){return q("SimpleDb","ADD",this.store.name,a,a),aj(this.store.add(a))}get(a){return aj(this.store.get(a)).next(b=>(void 0===b&&(b=null),q("SimpleDb","GET",this.store.name,a,b),b))}delete(a){return q("SimpleDb","DELETE",this.store.name,a),aj(this.store.delete(a))}count(){return q("SimpleDb","COUNT",this.store.name),aj(this.store.count())}W(a,b){let c=this.options(a,b);if(c.index||"function"!=typeof this.store.getAll){let d=this.cursor(c),e=[];return this.H(d,(a,b)=>{e.push(b)}).next(()=>e)}{let f=this.store.getAll(c.range);return new ac((a,b)=>{f.onerror=a=>{b(a.target.error)},f.onsuccess=b=>{a(b.target.result)}})}}J(a,b){let c=this.store.getAll(a,null===b?void 0:b);return new ac((a,b)=>{c.onerror=a=>{b(a.target.error)},c.onsuccess=b=>{a(b.target.result)}})}Y(a,b){q("SimpleDb","DELETE ALL",this.store.name);let c=this.options(a,b);c.X=!1;let d=this.cursor(c);return this.H(d,(a,b,c)=>c.delete())}Z(a,b){let c;b?c=a:(c={},b=a);let d=this.cursor(c);return this.H(d,b)}tt(a){let b=this.cursor({});return new ac((c,d)=>{b.onerror=a=>{let b=al(a.target.error);d(b)},b.onsuccess=b=>{let d=b.target.result;d?a(d.primaryKey,d.value).next(a=>{a?d.continue():c()}):c()}})}H(a,b){let c=[];return new ac((d,e)=>{a.onerror=a=>{e(a.target.error)},a.onsuccess=a=>{let e=a.target.result;if(!e)return void d();let f=new af(e),g=b(e.primaryKey,e.value,f);if(g instanceof ac){let h=g.catch(a=>(f.done(),ac.reject(a)));c.push(h)}f.isDone?d():null===f.G?e.continue():e.continue(f.G)}}).next(()=>ac.waitFor(c))}options(a,b){let c;return void 0!==a&&("string"==typeof a?c=a:b=a),{index:c,range:b}}cursor(a){let b="next";if(a.reverse&&(b="prev"),a.index){let c=this.store.index(a.index);return a.X?c.openKeyCursor(a.range,b):c.openCursor(a.range,b)}return this.store.openCursor(a.range,b)}}function aj(a){return new ac((b,c)=>{a.onsuccess=a=>{let c=a.target.result;b(c)},a.onerror=a=>{let b=al(a.target.error);c(b)}})}let ak=null;function al(a){let b=ae.D(getUA());if(b>=12.2&&b<13){let c="An internal error was encountered in the Indexed Database server";if(a.message.indexOf(c)>=0){let d=new w("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${c}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ak||(ak=!0,setTimeout(()=>{throw d},0)),d}}return a}class am{constructor(a,b){this.asyncQueue=a,this.et=b,this.task=null}start(){this.nt(15)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}nt(a){q("IndexBackiller",`Scheduled in ${a}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",a,async()=>{this.task=null;try{q("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(a){ah(a)?q("IndexBackiller","Ignoring IndexedDB error during index backfill: ",a):await ab(a)}await this.nt(1)})}}class an{constructor(a,b){this.localStore=a,this.persistence=b}async st(a=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",b=>this.it(b,a))}it(a,b){let c=new Set,d=b,e=!0;return ac.doWhile(()=>!0===e&&d>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(a).next(b=>{if(null!==b&&!c.has(b))return q("IndexBackiller",`Processing collection: ${b}`),this.rt(a,b,d).next(a=>{d-=a,c.add(b)});e=!1})).next(()=>b-d)}rt(a,b,c){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(a,b).next(d=>this.localStore.localDocuments.getNextDocuments(a,b,d,c).next(c=>{let e=c.changes;return this.localStore.indexManager.updateIndexEntries(a,e).next(()=>this.ot(d,c)).next(c=>(q("IndexBackiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(a,b,c))).next(()=>e.size)}))}ot(a,b){let c=a;return b.changes.forEach((a,b)=>{let d=Y(b);$(d,c)>0&&(c=d)}),new Z(c.readTime,c.documentKey,Math.max(b.batchId,a.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
 * exceed. All subsequent calls to next will return increasing values. If provided with a
 * `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
 * well as write out sequence numbers that it produces via `next()`.
 */ class ao{constructor(a,b){this.previousValue=a,b&&(b.sequenceNumberHandler=a=>this.ut(a),this.ct=a=>b.writeSequenceNumber(a))}ut(a){return this.previousValue=Math.max(a,this.previousValue),this.previousValue}next(){let a=++this.previousValue;return this.ct&&this.ct(a),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ap(a){let b=0;for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b++;return b}function aq(a,b){for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}function ar(a){for(let b in a)if(Object.prototype.hasOwnProperty.call(a,b))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
ao.at=-1;class as{constructor(a,b){this.comparator=a,this.root=b||au.EMPTY}insert(a,b){return new as(this.comparator,this.root.insert(a,b,this.comparator).copy(null,null,au.BLACK,null,null))}remove(a){return new as(this.comparator,this.root.remove(a,this.comparator).copy(null,null,au.BLACK,null,null))}get(a){let b=this.root;for(;!b.isEmpty();){let c=this.comparator(a,b.key);if(0===c)return b.value;c<0?b=b.left:c>0&&(b=b.right)}return null}indexOf(a){let b=0,c=this.root;for(;!c.isEmpty();){let d=this.comparator(a,c.key);if(0===d)return b+c.left.size;d<0?c=c.left:(b+=c.left.size+1,c=c.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(a){return this.root.inorderTraversal(a)}forEach(a){this.inorderTraversal((b,c)=>(a(b,c),!1))}toString(){let a=[];return this.inorderTraversal((b,c)=>(a.push(`${b}:${c}`),!1)),`{${a.join(", ")}}`}reverseTraversal(a){return this.root.reverseTraversal(a)}getIterator(){return new at(this.root,null,this.comparator,!1)}getIteratorFrom(a){return new at(this.root,a,this.comparator,!1)}getReverseIterator(){return new at(this.root,null,this.comparator,!0)}getReverseIteratorFrom(a){return new at(this.root,a,this.comparator,!0)}}class at{constructor(a,b,c,d){this.isReverse=d,this.nodeStack=[];let e=1;for(;!a.isEmpty();)if(e=b?c(a.key,b):1,b&&d&&(e*=-1),e<0)a=this.isReverse?a.left:a.right;else{if(0===e){this.nodeStack.push(a);break}this.nodeStack.push(a),a=this.isReverse?a.right:a.left}}getNext(){let a=this.nodeStack.pop(),b={key:a.key,value:a.value};if(this.isReverse)for(a=a.left;!a.isEmpty();)this.nodeStack.push(a),a=a.right;else for(a=a.right;!a.isEmpty();)this.nodeStack.push(a),a=a.left;return b}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let a=this.nodeStack[this.nodeStack.length-1];return{key:a.key,value:a.value}}}class au{constructor(a,b,c,d,e){this.key=a,this.value=b,this.color=null!=c?c:au.RED,this.left=null!=d?d:au.EMPTY,this.right=null!=e?e:au.EMPTY,this.size=this.left.size+1+this.right.size}copy(a,b,c,d,e){return new au(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)}isEmpty(){return!1}inorderTraversal(a){return this.left.inorderTraversal(a)||a(this.key,this.value)||this.right.inorderTraversal(a)}reverseTraversal(a){return this.right.reverseTraversal(a)||a(this.key,this.value)||this.left.reverseTraversal(a)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(a,b,c){let d=this,e=c(a,d.key);return(d=e<0?d.copy(null,null,null,d.left.insert(a,b,c),null):0===e?d.copy(null,b,null,null,null):d.copy(null,null,null,null,d.right.insert(a,b,c))).fixUp()}removeMin(){if(this.left.isEmpty())return au.EMPTY;let a=this;return a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),(a=a.copy(null,null,null,a.left.removeMin(),null)).fixUp()}remove(a,b){let c,d=this;if(0>b(a,d.key))d.left.isEmpty()||d.left.isRed()||d.left.left.isRed()||(d=d.moveRedLeft()),d=d.copy(null,null,null,d.left.remove(a,b),null);else{if(d.left.isRed()&&(d=d.rotateRight()),d.right.isEmpty()||d.right.isRed()||d.right.left.isRed()||(d=d.moveRedRight()),0===b(a,d.key)){if(d.right.isEmpty())return au.EMPTY;c=d.right.min(),d=d.copy(c.key,c.value,null,null,d.right.removeMin())}d=d.copy(null,null,null,null,d.right.remove(a,b))}return d.fixUp()}isRed(){return this.color}fixUp(){let a=this;return a.right.isRed()&&!a.left.isRed()&&(a=a.rotateLeft()),a.left.isRed()&&a.left.left.isRed()&&(a=a.rotateRight()),a.left.isRed()&&a.right.isRed()&&(a=a.colorFlip()),a}moveRedLeft(){let a=this.colorFlip();return a.right.left.isRed()&&(a=(a=(a=a.copy(null,null,null,null,a.right.rotateRight())).rotateLeft()).colorFlip()),a}moveRedRight(){let a=this.colorFlip();return a.left.left.isRed()&&(a=(a=a.rotateRight()).colorFlip()),a}rotateLeft(){let a=this.copy(null,null,au.RED,null,this.right.left);return this.right.copy(null,null,this.color,a,null)}rotateRight(){let a=this.copy(null,null,au.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,a)}colorFlip(){let a=this.left.copy(null,null,!this.left.color,null,null),b=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,a,b)}checkMaxDepth(){let a=this.check();return Math.pow(2,a)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw u();let a=this.left.check();if(a!==this.right.check())throw u();return a+(this.isRed()?0:1)}}au.EMPTY=null,au.RED=!0,au.BLACK=!1,au.EMPTY=new class{constructor(){this.size=0}get key(){throw u()}get value(){throw u()}get color(){throw u()}get left(){throw u()}get right(){throw u()}copy(a,b,c,d,e){return this}insert(a,b,c){return new au(a,b)}remove(a,b){return this}isEmpty(){return!0}inorderTraversal(a){return!1}reverseTraversal(a){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */ class av{constructor(a){this.comparator=a,this.data=new as(this.comparator)}has(a){return null!==this.data.get(a)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(a){return this.data.indexOf(a)}forEach(a){this.data.inorderTraversal((b,c)=>(a(b),!1))}forEachInRange(a,b){let c=this.data.getIteratorFrom(a[0]);for(;c.hasNext();){let d=c.getNext();if(this.comparator(d.key,a[1])>=0)return;b(d.key)}}forEachWhile(a,b){let c;for(c=void 0!==b?this.data.getIteratorFrom(b):this.data.getIterator();c.hasNext();)if(!a(c.getNext().key))return}firstAfterOrEqual(a){let b=this.data.getIteratorFrom(a);return b.hasNext()?b.getNext().key:null}getIterator(){return new aw(this.data.getIterator())}getIteratorFrom(a){return new aw(this.data.getIteratorFrom(a))}add(a){return this.copy(this.data.remove(a).insert(a,!0))}delete(a){return this.has(a)?this.copy(this.data.remove(a)):this}isEmpty(){return this.data.isEmpty()}unionWith(a){let b=this;return b.size<a.size&&(b=a,a=this),a.forEach(a=>{b=b.add(a)}),b}isEqual(a){if(!(a instanceof av)||this.size!==a.size)return!1;let b=this.data.getIterator(),c=a.data.getIterator();for(;b.hasNext();){let d=b.getNext().key,e=c.getNext().key;if(0!==this.comparator(d,e))return!1}return!0}toArray(){let a=[];return this.forEach(b=>{a.push(b)}),a}toString(){let a=[];return this.forEach(b=>a.push(b)),"SortedSet("+a.toString()+")"}copy(a){let b=new av(this.comparator);return b.data=a,b}}class aw{constructor(a){this.iter=a}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ax(a){return a.hasNext()?a.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ class ay{constructor(a){this.fields=a,a.sort(P.comparator)}static empty(){return new ay([])}unionWith(a){let b=new av(P.comparator);for(let c of this.fields)b=b.add(c);for(let d of a)b=b.add(d);return new ay(b.toArray())}covers(a){for(let b of this.fields)if(b.isPrefixOf(a))return!0;return!1}isEqual(a){return I(this.fields,a.fields,(a,b)=>a.isEqual(b))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 * @internal
 */ class az{constructor(a){this.binaryString=a}static fromBase64String(a){let b=atob(a);return new az(b)}static fromUint8Array(a){let b=function(a){let b="";for(let c=0;c<a.length;++c)b+=String.fromCharCode(a[c]);return b}(a);return new az(b)}[Symbol.iterator](){let a=0;return{next:()=>a<this.binaryString.length?{value:this.binaryString.charCodeAt(a++),done:!1}:{value:void 0,done:!0}}}toBase64(){var a;return btoa(this.binaryString)}toUint8Array(){return function(a){let b=new Uint8Array(a.length);for(let c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(a){return H(this.binaryString,a.binaryString)}isEqual(a){return this.binaryString===a.binaryString}}az.EMPTY_BYTE_STRING=new az("");let aA=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function aB(a){var b,c;if(!a&&u(),"string"==typeof a){let d=0,e=aA.exec(a);if(!e&&u(),e[1]){let f=e[1];d=Number(f=(f+"000000000").substr(0,9))}let g=new Date(a);return{seconds:Math.floor(g.getTime()/1e3),nanos:d}}return{seconds:aC(a.seconds),nanos:aC(a.nanos)}}function aC(a){return"number"==typeof a?a:"string"==typeof a?Number(a):0}function aD(a){return"string"==typeof a?az.fromBase64String(a):az.fromUint8Array(a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   transform. They can only exist in the local view of a document. Therefore
 *   they do not need to be parsed or serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */ function aE(a){var b,c;return"server_timestamp"===(null===(c=((null===(b=null==a?void 0:a.mapValue)|| void 0===b?void 0:b.fields)||{}).__type__)|| void 0===c?void 0:c.stringValue)}function aF(a){let b=a.mapValue.fields.__previous_value__;return aE(b)?aF(b):b}function aG(a){let b=aB(a.mapValue.fields.__local_write_time__.timestampValue);return new K(b.seconds,b.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aH{constructor(a,b,c,d,e,f,g,h){this.databaseId=a,this.appId=b,this.persistenceKey=c,this.host=d,this.ssl=e,this.forceLongPolling=f,this.autoDetectLongPolling=g,this.useFetchStreams=h}}class aI{constructor(a,b){this.projectId=a,this.database=b||"(default)"}static empty(){return new aI("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(a){return a instanceof aI&&a.projectId===this.projectId&&a.database===this.database}}function aJ(a){return null==a}function aK(a){return 0===a&&1/a== -1/0}function aL(a){return"number"==typeof a&&Number.isInteger(a)&&!aK(a)&&a<=Number.MAX_SAFE_INTEGER&&a>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let aM={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},aN={nullValue:"NULL_VALUE"};function aO(a){return"nullValue"in a?0:"booleanValue"in a?1:"integerValue"in a||"doubleValue"in a?2:"timestampValue"in a?3:"stringValue"in a?5:"bytesValue"in a?6:"referenceValue"in a?7:"geoPointValue"in a?8:"arrayValue"in a?9:"mapValue"in a?aE(a)?4:a_(a)?9007199254740991:10:u()}function aP(a,b){var c,d,e,f;if(a===b)return!0;let g=aO(a);if(g!==aO(b))return!1;switch(g){case 0:case 9007199254740991:return!0;case 1:return a.booleanValue===b.booleanValue;case 4:return aG(a).isEqual(aG(b));case 3:return function(a,b){if("string"==typeof a.timestampValue&&"string"==typeof b.timestampValue&&a.timestampValue.length===b.timestampValue.length)return a.timestampValue===b.timestampValue;let c=aB(a.timestampValue),d=aB(b.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(a,b);case 5:return a.stringValue===b.stringValue;case 6:return c=a,d=b,aD(c.bytesValue).isEqual(aD(d.bytesValue));case 7:return a.referenceValue===b.referenceValue;case 8:return e=a,f=b,aC(e.geoPointValue.latitude)===aC(f.geoPointValue.latitude)&&aC(e.geoPointValue.longitude)===aC(f.geoPointValue.longitude);case 2:return function(a,b){if("integerValue"in a&&"integerValue"in b)return aC(a.integerValue)===aC(b.integerValue);if("doubleValue"in a&&"doubleValue"in b){let c=aC(a.doubleValue),d=aC(b.doubleValue);return c===d?aK(c)===aK(d):isNaN(c)&&isNaN(d)}return!1}(a,b);case 9:return I(a.arrayValue.values||[],b.arrayValue.values||[],aP);case 10:return function(a,b){let c=a.mapValue.fields||{},d=b.mapValue.fields||{};if(ap(c)!==ap(d))return!1;for(let e in c)if(c.hasOwnProperty(e)&&(void 0===d[e]||!aP(c[e],d[e])))return!1;return!0}(a,b);default:return u()}}function aQ(a,b){return void 0!==(a.values||[]).find(a=>aP(a,b))}function aR(a,b){if(a===b)return 0;let c=aO(a),d=aO(b);if(c!==d)return H(c,d);switch(c){case 0:case 9007199254740991:return 0;case 1:return H(a.booleanValue,b.booleanValue);case 2:return function(a,b){let c=aC(a.integerValue||a.doubleValue),d=aC(b.integerValue||b.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(a,b);case 3:return aS(a.timestampValue,b.timestampValue);case 4:return aS(aG(a),aG(b));case 5:return H(a.stringValue,b.stringValue);case 6:return function(a,b){let c=aD(a),d=aD(b);return c.compareTo(d)}(a.bytesValue,b.bytesValue);case 7:return function(a,b){let c=a.split("/"),d=b.split("/");for(let e=0;e<c.length&&e<d.length;e++){let f=H(c[e],d[e]);if(0!==f)return f}return H(c.length,d.length)}(a.referenceValue,b.referenceValue);case 8:return function(a,b){let c=H(aC(a.latitude),aC(b.latitude));return 0!==c?c:H(aC(a.longitude),aC(b.longitude))}(a.geoPointValue,b.geoPointValue);case 9:return function(a,b){let c=a.values||[],d=b.values||[];for(let e=0;e<c.length&&e<d.length;++e){let f=aR(c[e],d[e]);if(f)return f}return H(c.length,d.length)}(a.arrayValue,b.arrayValue);case 10:return function(a,b){if(a===aM.mapValue&&b===aM.mapValue)return 0;if(a===aM.mapValue)return 1;if(b===aM.mapValue)return -1;let c=a.fields||{},d=Object.keys(c),e=b.fields||{},f=Object.keys(e);d.sort(),f.sort();for(let g=0;g<d.length&&g<f.length;++g){let h=H(d[g],f[g]);if(0!==h)return h;let i=aR(c[d[g]],e[f[g]]);if(0!==i)return i}return H(d.length,f.length)}(a.mapValue,b.mapValue);default:throw u()}}function aS(a,b){if("string"==typeof a&&"string"==typeof b&&a.length===b.length)return H(a,b);let c=aB(a),d=aB(b),e=H(c.seconds,d.seconds);return 0!==e?e:H(c.nanos,d.nanos)}function aT(a){var b,c;return"nullValue"in a?"null":"booleanValue"in a?""+a.booleanValue:"integerValue"in a?""+a.integerValue:"doubleValue"in a?""+a.doubleValue:"timestampValue"in a?function(a){let b=aB(a);return`time(${b.seconds},${b.nanos})`}(a.timestampValue):"stringValue"in a?a.stringValue:"bytesValue"in a?aD(a.bytesValue).toBase64():"referenceValue"in a?(c=a.referenceValue,Q.fromName(c).toString()):"geoPointValue"in a?`geo(${(b=a.geoPointValue).latitude},${b.longitude})`:"arrayValue"in a?function(a){let b="[",c=!0;for(let d of a.values||[])c?c=!1:b+=",",b+=aT(d);return b+"]"}(a.arrayValue):"mapValue"in a?function(a){let b=Object.keys(a.fields||{}).sort(),c="{",d=!0;for(let e of b)d?d=!1:c+=",",c+=`${e}:${aT(a.fields[e])}`;return c+"}"}(a.mapValue):u()}function aU(a,b){return{referenceValue:`projects/${a.projectId}/databases/${a.database}/documents/${b.path.canonicalString()}`}}function aV(a){return!!a&&"integerValue"in a}function aW(a){return!!a&&"arrayValue"in a}function aX(a){return!!a&&"nullValue"in a}function aY(a){return!!a&&"doubleValue"in a&&isNaN(Number(a.doubleValue))}function aZ(a){return!!a&&"mapValue"in a}function a$(a){if(a.geoPointValue)return{geoPointValue:Object.assign({},a.geoPointValue)};if(a.timestampValue&&"object"==typeof a.timestampValue)return{timestampValue:Object.assign({},a.timestampValue)};if(a.mapValue){let b={mapValue:{fields:{}}};return aq(a.mapValue.fields,(a,c)=>b.mapValue.fields[a]=a$(c)),b}if(a.arrayValue){let c={arrayValue:{values:[]}};for(let d=0;d<(a.arrayValue.values||[]).length;++d)c.arrayValue.values[d]=a$(a.arrayValue.values[d]);return c}return Object.assign({},a)}function a_(a){return"__max__"===(((a.mapValue||{}).fields||{}).__type__||{}).stringValue}function a0(a){return"nullValue"in a?aN:"booleanValue"in a?{booleanValue:!1}:"integerValue"in a||"doubleValue"in a?{doubleValue:NaN}:"timestampValue"in a?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in a?{stringValue:""}:"bytesValue"in a?{bytesValue:""}:"referenceValue"in a?aU(aI.empty(),Q.empty()):"geoPointValue"in a?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in a?{arrayValue:{}}:"mapValue"in a?{mapValue:{}}:u()}function a1(a){return"nullValue"in a?{booleanValue:!1}:"booleanValue"in a?{doubleValue:NaN}:"integerValue"in a||"doubleValue"in a?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in a?{stringValue:""}:"stringValue"in a?{bytesValue:""}:"bytesValue"in a?aU(aI.empty(),Q.empty()):"referenceValue"in a?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in a?{arrayValue:{}}:"arrayValue"in a?{mapValue:{}}:"mapValue"in a?aM:u()}function a2(a,b){let c=aR(a.value,b.value);return 0!==c?c:a.inclusive&&!b.inclusive?-1:!a.inclusive&&b.inclusive?1:0}function a3(a,b){let c=aR(a.value,b.value);return 0!==c?c:a.inclusive&&!b.inclusive?1:!a.inclusive&&b.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An ObjectValue represents a MapValue in the Firestore Proto and offers the
 * ability to add and remove fields (via the ObjectValueBuilder).
 */ class a4{constructor(a){this.value=a}static empty(){return new a4({mapValue:{}})}field(a){if(a.isEmpty())return this.value;{let b=this.value;for(let c=0;c<a.length-1;++c)if(!aZ(b=(b.mapValue.fields||{})[a.get(c)]))return null;return(b=(b.mapValue.fields||{})[a.lastSegment()])||null}}set(a,b){this.getFieldsMap(a.popLast())[a.lastSegment()]=a$(b)}setAll(a){let b=P.emptyPath(),c={},d=[];a.forEach((a,e)=>{if(!b.isImmediateParentOf(e)){let f=this.getFieldsMap(b);this.applyChanges(f,c,d),c={},d=[],b=e.popLast()}a?c[e.lastSegment()]=a$(a):d.push(e.lastSegment())});let e=this.getFieldsMap(b);this.applyChanges(e,c,d)}delete(a){let b=this.field(a.popLast());aZ(b)&&b.mapValue.fields&&delete b.mapValue.fields[a.lastSegment()]}isEqual(a){return aP(this.value,a.value)}getFieldsMap(a){let b=this.value;b.mapValue.fields||(b.mapValue={fields:{}});for(let c=0;c<a.length;++c){let d=b.mapValue.fields[a.get(c)];aZ(d)&&d.mapValue.fields||(d={mapValue:{fields:{}}},b.mapValue.fields[a.get(c)]=d),b=d}return b.mapValue.fields}applyChanges(a,b,c){for(let d of(aq(b,(b,c)=>a[b]=c),c))delete a[d]}clone(){return new a4(a$(this.value))}}function a5(a){let b=[];return aq(a.fields,(a,c)=>{let d=new P([a]);if(aZ(c)){let e=a5(c.mapValue).fields;if(0===e.length)b.push(d);else for(let f of e)b.push(d.child(f))}else b.push(d)}),new ay(b)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a document in Firestore with a key, version, data and whether it
 * has local mutations applied to it.
 *
 * Documents can transition between states via `convertToFoundDocument()`,
 * `convertToNoDocument()` and `convertToUnknownDocument()`. If a document does
 * not transition to one of these states even after all mutations have been
 * applied, `isValidDocument()` returns false and the document should be removed
 * from all views.
 */ class a6{constructor(a,b,c,d,e,f){this.key=a,this.documentType=b,this.version=c,this.readTime=d,this.data=e,this.documentState=f}static newInvalidDocument(a){return new a6(a,0,L.min(),L.min(),a4.empty(),0)}static newFoundDocument(a,b,c){return new a6(a,1,b,L.min(),c,0)}static newNoDocument(a,b){return new a6(a,2,b,L.min(),a4.empty(),0)}static newUnknownDocument(a,b){return new a6(a,3,b,L.min(),a4.empty(),2)}convertToFoundDocument(a,b){return this.version=a,this.documentType=1,this.data=b,this.documentState=0,this}convertToNoDocument(a){return this.version=a,this.documentType=2,this.data=a4.empty(),this.documentState=0,this}convertToUnknownDocument(a){return this.version=a,this.documentType=3,this.data=a4.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(a){return this.readTime=a,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(a){return a instanceof a6&&this.key.isEqual(a.key)&&this.version.isEqual(a.version)&&this.documentType===a.documentType&&this.documentState===a.documentState&&this.data.isEqual(a.data)}mutableCopy(){return new a6(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * Compares the value for field `field` in the provided documents. Throws if
 * the field does not exist in both documents.
 */ /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Visible for testing
class a7{constructor(a,b=null,c=[],d=[],e=null,f=null,g=null){this.path=a,this.collectionGroup=b,this.orderBy=c,this.filters=d,this.limit=e,this.startAt=f,this.endAt=g,this.ht=null}}function a8(a,b=null,c=[],d=[],e=null,f=null,g=null){return new a7(a,b,c,d,e,f,g)}function a9(a){var b;let c=b=a;if(null===c.ht){let d=c.path.canonicalString();null!==c.collectionGroup&&(d+="|cg:"+c.collectionGroup),d+="|f:",d+=c.filters.map(a=>{var b,c;return(b=a).field.canonicalString()+b.op.toString()+aT(c=b.value)}).join(","),d+="|ob:",d+=c.orderBy.map(a=>{var b;return(b=a).field.canonicalString()+b.dir}).join(","),aJ(c.limit)||(d+="|l:",d+=c.limit),c.startAt&&(d+="|lb:",d+=c.startAt.inclusive?"b:":"a:",d+=c.startAt.position.map(a=>{var b;return aT(b=a)}).join(",")),c.endAt&&(d+="|ub:",d+=c.endAt.inclusive?"a:":"b:",d+=c.endAt.position.map(a=>{var b;return aT(b=a)}).join(",")),c.ht=d}return c.ht}function ba(a,b){var c,d;if(a.limit!==b.limit||a.orderBy.length!==b.orderBy.length)return!1;for(let e=0;e<a.orderBy.length;e++)if(!bq(a.orderBy[e],b.orderBy[e]))return!1;if(a.filters.length!==b.filters.length)return!1;for(let f=0;f<a.filters.length;f++)if(c=a.filters[f],d=b.filters[f],c.op!==d.op||!c.field.isEqual(d.field)||!aP(c.value,d.value))return!1;return a.collectionGroup===b.collectionGroup&&!!a.path.isEqual(b.path)&&!!bs(a.startAt,b.startAt)&&bs(a.endAt,b.endAt)}function bb(a){return Q.isDocumentKey(a.path)&&null===a.collectionGroup&&0===a.filters.length}function bc(a,b){return a.filters.filter(a=>a instanceof bf&&a.field.isEqual(b))}function bd(a,b,c){let d=aN,e=!0;for(let f of bc(a,b)){let g=aN,h=!0;switch(f.op){case"<":case"<=":g=a0(f.value);break;case"==":case"in":case">=":g=f.value;break;case">":g=f.value,h=!1;break;case"!=":case"not-in":g=aN}0>a2({value:d,inclusive:e},{value:g,inclusive:h})&&(d=g,e=h)}if(null!==c){for(let i=0;i<a.orderBy.length;++i)if(a.orderBy[i].field.isEqual(b)){let j=c.position[i];0>a2({value:d,inclusive:e},{value:j,inclusive:c.inclusive})&&(d=j,e=c.inclusive);break}}return{value:d,inclusive:e}}function be(a,b,c){let d=aM,e=!0;for(let f of bc(a,b)){let g=aM,h=!0;switch(f.op){case">=":case">":g=a1(f.value),h=!1;break;case"==":case"in":case"<=":g=f.value;break;case"<":g=f.value,h=!1;break;case"!=":case"not-in":g=aM}a3({value:d,inclusive:e},{value:g,inclusive:h})>0&&(d=g,e=h)}if(null!==c){for(let i=0;i<a.orderBy.length;++i)if(a.orderBy[i].field.isEqual(b)){let j=c.position[i];a3({value:d,inclusive:e},{value:j,inclusive:c.inclusive})>0&&(d=j,e=c.inclusive);break}}return{value:d,inclusive:e}}class bf extends class{}{constructor(a,b,c){super(),this.field=a,this.op=b,this.value=c}static create(a,b,c){return a.isKeyField()?"in"===b||"not-in"===b?this.lt(a,b,c):new bg(a,b,c):"array-contains"===b?new bk(a,c):"in"===b?new bl(a,c):"not-in"===b?new bm(a,c):"array-contains-any"===b?new bn(a,c):new bf(a,b,c)}static lt(a,b,c){return"in"===b?new bh(a,c):new bi(a,c)}matches(a){let b=a.data.field(this.field);return"!="===this.op?null!==b&&this.ft(aR(b,this.value)):null!==b&&aO(this.value)===aO(b)&&this.ft(aR(b,this.value))}ft(a){switch(this.op){case"<":return a<0;case"<=":return a<=0;case"==":return 0===a;case"!=":return 0!==a;case">":return a>0;case">=":return a>=0;default:return u()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class bg extends bf{constructor(a,b,c){super(a,b,c),this.key=Q.fromName(c.referenceValue)}matches(a){let b=Q.comparator(a.key,this.key);return this.ft(b)}}class bh extends bf{constructor(a,b){super(a,"in",b),this.keys=bj("in",b)}matches(a){return this.keys.some(b=>b.isEqual(a.key))}}class bi extends bf{constructor(a,b){super(a,"not-in",b),this.keys=bj("not-in",b)}matches(a){return!this.keys.some(b=>b.isEqual(a.key))}}function bj(a,b){var c;return((null===(c=b.arrayValue)|| void 0===c?void 0:c.values)||[]).map(a=>Q.fromName(a.referenceValue))}class bk extends bf{constructor(a,b){super(a,"array-contains",b)}matches(a){let b=a.data.field(this.field);return aW(b)&&aQ(b.arrayValue,this.value)}}class bl extends bf{constructor(a,b){super(a,"in",b)}matches(a){let b=a.data.field(this.field);return null!==b&&aQ(this.value.arrayValue,b)}}class bm extends bf{constructor(a,b){super(a,"not-in",b)}matches(a){if(aQ(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let b=a.data.field(this.field);return null!==b&&!aQ(this.value.arrayValue,b)}}class bn extends bf{constructor(a,b){super(a,"array-contains-any",b)}matches(a){let b=a.data.field(this.field);return!(!aW(b)||!b.arrayValue.values)&&b.arrayValue.values.some(a=>aQ(this.value.arrayValue,a))}}class bo{constructor(a,b){this.position=a,this.inclusive=b}}class bp{constructor(a,b="asc"){this.field=a,this.dir=b}}function bq(a,b){return a.dir===b.dir&&a.field.isEqual(b.field)}function br(a,b,c){let d=0;for(let e=0;e<a.position.length;e++){let f=b[e],g=a.position[e];if(d=f.field.isKeyField()?Q.comparator(Q.fromName(g.referenceValue),c.key):aR(g,c.data.field(f.field)),"desc"===f.dir&&(d*=-1),0!==d)break}return d}function bs(a,b){if(null===a)return null===b;if(null===b||a.inclusive!==b.inclusive||a.position.length!==b.position.length)return!1;for(let c=0;c<a.position.length;c++)if(!aP(a.position[c],b.position[c]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */ class bt{constructor(a,b=null,c=[],d=[],e=null,f="F",g=null,h=null){this.path=a,this.collectionGroup=b,this.explicitOrderBy=c,this.filters=d,this.limit=e,this.limitType=f,this.startAt=g,this.endAt=h,this._t=null,this.wt=null,this.startAt,this.endAt}}function bu(a,b,c,d,e,f,g,h){return new bt(a,b,c,d,e,f,g,h)}function bv(a){return new bt(a)}function bw(a){return 0===a.filters.length&&null===a.limit&&null==a.startAt&&null==a.endAt&&(0===a.explicitOrderBy.length||1===a.explicitOrderBy.length&&a.explicitOrderBy[0].field.isKeyField())}function bx(a){return a.explicitOrderBy.length>0?a.explicitOrderBy[0].field:null}function by(a){for(let b of a.filters)if(b.dt())return b.field;return null}function bz(a){return null!==a.collectionGroup}function bA(a){var b;let c=b=a;if(null===c._t){c._t=[];let d=by(c),e=bx(c);if(null!==d&&null===e)d.isKeyField()||c._t.push(new bp(d)),c._t.push(new bp(P.keyField(),"asc"));else{let f=!1;for(let g of c.explicitOrderBy)c._t.push(g),g.field.isKeyField()&&(f=!0);if(!f){let h=c.explicitOrderBy.length>0?c.explicitOrderBy[c.explicitOrderBy.length-1].dir:"asc";c._t.push(new bp(P.keyField(),h))}}}return c._t}function bB(a){var b;let c=b=a;if(!c.wt){if("F"===c.limitType)c.wt=a8(c.path,c.collectionGroup,bA(c),c.filters,c.limit,c.startAt,c.endAt);else{let d=[];for(let e of bA(c)){let f="desc"===e.dir?"asc":"desc";d.push(new bp(e.field,f))}let g=c.endAt?new bo(c.endAt.position,c.endAt.inclusive):null,h=c.startAt?new bo(c.startAt.position,c.startAt.inclusive):null;c.wt=a8(c.path,c.collectionGroup,d,c.filters,c.limit,g,h)}}return c.wt}function bC(a,b,c){return new bt(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),b,c,a.startAt,a.endAt)}function bD(a,b){return ba(bB(a),bB(b))&&a.limitType===b.limitType}function bE(a){return`${a9(bB(a))}|lt:${a.limitType}`}function bF(a){var b;let c;return`Query(target=${c=(b=bB(a)).path.canonicalString(),null!==b.collectionGroup&&(c+=" collectionGroup="+b.collectionGroup),b.filters.length>0&&(c+=`, filters: [${b.filters.map(a=>{var b,c;return`${(b=a).field.canonicalString()} ${b.op} ${aT(c=b.value)}`}).join(", ")}]`),aJ(b.limit)||(c+=", limit: "+b.limit),b.orderBy.length>0&&(c+=`, orderBy: [${b.orderBy.map(a=>{var b;return b=a,`${b.field.canonicalString()} (${b.dir})`}).join(", ")}]`),b.startAt&&(c+=", startAt: ",c+=b.startAt.inclusive?"b:":"a:",c+=b.startAt.position.map(a=>{var b;return aT(b=a)}).join(",")),b.endAt&&(c+=", endAt: ",c+=b.endAt.inclusive?"a:":"b:",c+=b.endAt.position.map(a=>{var b;return aT(b=a)}).join(",")),`Target(${c})`}; limitType=${a.limitType})`}function bG(a,b){var c,d;return b.isFoundDocument()&&function(a,b){let c=b.key.path;return null!==a.collectionGroup?b.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(c):Q.isDocumentKey(a.path)?a.path.isEqual(c):a.path.isImmediateParentOf(c)}(a,b)&&function(a,b){for(let c of a.explicitOrderBy)if(!c.field.isKeyField()&&null===b.data.field(c.field))return!1;return!0}(a,b)&&function(a,b){for(let c of a.filters)if(!c.matches(b))return!1;return!0}(a,b)&&(c=a,d=b,(!c.startAt||!!function(a,b,c){let d=br(a,b,c);return a.inclusive?d<=0:d<0}(c.startAt,bA(c),d))&&(!c.endAt||!!function(a,b,c){let d=br(a,b,c);return a.inclusive?d>=0:d>0}(c.endAt,bA(c),d)))}function bH(a){return a.collectionGroup||(a.path.length%2==1?a.path.lastSegment():a.path.get(a.path.length-2))}function bI(a){return(b,c)=>{let d=!1;for(let e of bA(a)){let f=bJ(e,b,c);if(0!==f)return f;d=d||e.field.isKeyField()}return 0}}function bJ(a,b,c){let d=a.field.isKeyField()?Q.comparator(b.key,c.key):function(a,b,c){let d=b.data.field(a),e=c.data.field(a);return null!==d&&null!==e?aR(d,e):u()}(a.field,b,c);switch(a.dir){case"asc":return d;case"desc":return -1*d;default:return u()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */ function bK(a,b){if(a.gt){if(isNaN(b))return{doubleValue:"NaN"};if(b===1/0)return{doubleValue:"Infinity"};if(b=== -1/0)return{doubleValue:"-Infinity"}}return{doubleValue:aK(b)?"-0":b}}function bL(a){return{integerValue:""+a}}function bM(a,b){return aL(b)?bL(b):bK(a,b)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Used to represent a field transform on a mutation. */ class bN{constructor(){this._=void 0}}function bO(a,b,c){return a instanceof bR?function(a,b){let c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return b&&(c.fields.__previous_value__=b),{mapValue:c}}(c,b):a instanceof bS?bT(a,b):a instanceof bU?bV(a,b):function(a,b){let c=bQ(a,b),d=bX(c)+bX(a.yt);return aV(c)&&aV(a.yt)?bL(d):bK(a.It,d)}(a,b)}function bP(a,b,c){return a instanceof bS?bT(a,b):a instanceof bU?bV(a,b):c}function bQ(a,b){var c,d;return a instanceof bW?aV(c=b)||(d=c)&&"doubleValue"in d?b:{integerValue:0}:null}class bR extends bN{}class bS extends bN{constructor(a){super(),this.elements=a}}function bT(a,b){let c=bY(b);for(let d of a.elements)c.some(a=>aP(a,d))||c.push(d);return{arrayValue:{values:c}}}class bU extends bN{constructor(a){super(),this.elements=a}}function bV(a,b){let c=bY(b);for(let d of a.elements)c=c.filter(a=>!aP(a,d));return{arrayValue:{values:c}}}class bW extends bN{constructor(a,b){super(),this.It=a,this.yt=b}}function bX(a){return aC(a.integerValue||a.doubleValue)}function bY(a){return aW(a)&&a.arrayValue.values?a.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** A field path and the TransformOperation to perform upon it. */ class bZ{constructor(a,b){this.field=a,this.transform=b}}class b${constructor(a,b){this.version=a,this.transformResults=b}}class b_{constructor(a,b){this.updateTime=a,this.exists=b}static none(){return new b_}static exists(a){return new b_(void 0,a)}static updateTime(a){return new b_(a)}get isNone(){return void 0===this.updateTime&& void 0===this.exists}isEqual(a){return this.exists===a.exists&&(this.updateTime?!!a.updateTime&&this.updateTime.isEqual(a.updateTime):!a.updateTime)}}function b0(a,b){return void 0!==a.updateTime?b.isFoundDocument()&&b.version.isEqual(a.updateTime):void 0===a.exists||a.exists===b.isFoundDocument()}class b1{}function b2(a,b){if(!a.hasLocalMutations||b&&0===b.fields.length)return null;if(null===b)return a.isNoDocument()?new cc(a.key,b_.none()):new b7(a.key,a.data,b_.none());{let c=a.data,d=a4.empty(),e=new av(P.comparator);for(let f of b.fields)if(!e.has(f)){let g=c.field(f);null===g&&f.length>1&&(f=f.popLast(),g=c.field(f)),null===g?d.delete(f):d.set(f,g),e=e.add(f)}return new b8(a.key,d,new ay(e.toArray()),b_.none())}}function b3(a,b,c){a instanceof b7?function(a,b,c){let d=a.value.clone(),e=ca(a.fieldTransforms,b,c.transformResults);d.setAll(e),b.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(a,b,c):a instanceof b8?function(a,b,c){if(!b0(a.precondition,b))return void b.convertToUnknownDocument(c.version);let d=ca(a.fieldTransforms,b,c.transformResults),e=b.data;e.setAll(b9(a)),e.setAll(d),b.convertToFoundDocument(c.version,e).setHasCommittedMutations()}(a,b,c):function(a,b,c){b.convertToNoDocument(c.version).setHasCommittedMutations()}(0,b,c)}function b4(a,b,c,d){var e,f,g;return a instanceof b7?function(a,b,c,d){if(!b0(a.precondition,b))return c;let e=a.value.clone(),f=cb(a.fieldTransforms,d,b);return e.setAll(f),b.convertToFoundDocument(b.version,e).setHasLocalMutations(),null}(a,b,c,d):a instanceof b8?function(a,b,c,d){if(!b0(a.precondition,b))return c;let e=cb(a.fieldTransforms,d,b),f=b.data;return(f.setAll(b9(a)),f.setAll(e),b.convertToFoundDocument(b.version,f).setHasLocalMutations(),null===c)?null:c.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(a=>a.field))}(a,b,c,d):(e=a,f=b,g=c,b0(e.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):g)}function b5(a,b){let c=null;for(let d of a.fieldTransforms){let e=b.data.field(d.field),f=bQ(d.transform,e||null);null!=f&&(null===c&&(c=a4.empty()),c.set(d.field,f))}return c||null}function b6(a,b){var c,d;return a.type===b.type&& !!a.key.isEqual(b.key)&&!!a.precondition.isEqual(b.precondition)&&(c=a.fieldTransforms,d=b.fieldTransforms,!!(void 0===c&& void 0===d|| !(!c||!d)&&I(c,d,(a,b)=>{var c,d,e,f;return c=a,d=b,c.field.isEqual(d.field)&&(e=c.transform,f=d.transform,e instanceof bS&&f instanceof bS||e instanceof bU&&f instanceof bU?I(e.elements,f.elements,aP):e instanceof bW&&f instanceof bW?aP(e.yt,f.yt):e instanceof bR&&f instanceof bR)})))&&(0===a.type?a.value.isEqual(b.value):1!==a.type||a.data.isEqual(b.data)&&a.fieldMask.isEqual(b.fieldMask))}class b7 extends b1{constructor(a,b,c,d=[]){super(),this.key=a,this.value=b,this.precondition=c,this.fieldTransforms=d,this.type=0}getFieldMask(){return null}}class b8 extends b1{constructor(a,b,c,d,e=[]){super(),this.key=a,this.data=b,this.fieldMask=c,this.precondition=d,this.fieldTransforms=e,this.type=1}getFieldMask(){return this.fieldMask}}function b9(a){let b=new Map;return a.fieldMask.fields.forEach(c=>{if(!c.isEmpty()){let d=a.data.field(c);b.set(c,d)}}),b}function ca(a,b,c){var d;let e=new Map;(d=a.length===c.length)||u();for(let f=0;f<c.length;f++){let g=a[f],h=g.transform,i=b.data.field(g.field);e.set(g.field,bP(h,i,c[f]))}return e}function cb(a,b,c){let d=new Map;for(let e of a){let f=e.transform,g=c.data.field(e.field);d.set(e.field,bO(f,g,b))}return d}class cc extends b1{constructor(a,b){super(),this.key=a,this.precondition=b,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cd extends b1{constructor(a,b){super(),this.key=a,this.precondition=b,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ce{constructor(a){this.count=a}}function cf(a){switch(a){default:return u();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}function cg(a){if(void 0===a)return r("GRPC error has no .code"),v.UNKNOWN;switch(a){case d.OK:return v.OK;case d.CANCELLED:return v.CANCELLED;case d.UNKNOWN:return v.UNKNOWN;case d.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case d.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case d.INTERNAL:return v.INTERNAL;case d.UNAVAILABLE:return v.UNAVAILABLE;case d.UNAUTHENTICATED:return v.UNAUTHENTICATED;case d.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case d.NOT_FOUND:return v.NOT_FOUND;case d.ALREADY_EXISTS:return v.ALREADY_EXISTS;case d.PERMISSION_DENIED:return v.PERMISSION_DENIED;case d.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case d.ABORTED:return v.ABORTED;case d.OUT_OF_RANGE:return v.OUT_OF_RANGE;case d.UNIMPLEMENTED:return v.UNIMPLEMENTED;case d.DATA_LOSS:return v.DATA_LOSS;default:return u()}}(e=d||(d={}))[e.OK=0]="OK",e[e.CANCELLED=1]="CANCELLED",e[e.UNKNOWN=2]="UNKNOWN",e[e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",e[e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",e[e.NOT_FOUND=5]="NOT_FOUND",e[e.ALREADY_EXISTS=6]="ALREADY_EXISTS",e[e.PERMISSION_DENIED=7]="PERMISSION_DENIED",e[e.UNAUTHENTICATED=16]="UNAUTHENTICATED",e[e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",e[e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",e[e.ABORTED=10]="ABORTED",e[e.OUT_OF_RANGE=11]="OUT_OF_RANGE",e[e.UNIMPLEMENTED=12]="UNIMPLEMENTED",e[e.INTERNAL=13]="INTERNAL",e[e.UNAVAILABLE=14]="UNAVAILABLE",e[e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A map implementation that uses objects as keys. Objects must have an
 * associated equals function and must be immutable. Entries in the map are
 * stored together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */ class ch{constructor(a,b){this.mapKeyFn=a,this.equalsFn=b,this.inner={},this.innerSize=0}get(a){let b=this.mapKeyFn(a),c=this.inner[b];if(void 0!==c){for(let[d,e]of c)if(this.equalsFn(d,a))return e}}has(a){return void 0!==this.get(a)}set(a,b){let c=this.mapKeyFn(a),d=this.inner[c];if(void 0===d)return this.inner[c]=[[a,b]],void this.innerSize++;for(let e=0;e<d.length;e++)if(this.equalsFn(d[e][0],a))return void(d[e]=[a,b]);d.push([a,b]),this.innerSize++}delete(a){let b=this.mapKeyFn(a),c=this.inner[b];if(void 0===c)return!1;for(let d=0;d<c.length;d++)if(this.equalsFn(c[d][0],a))return 1===c.length?delete this.inner[b]:c.splice(d,1),this.innerSize--,!0;return!1}forEach(a){aq(this.inner,(b,c)=>{for(let[d,e]of c)a(d,e)})}isEmpty(){return ar(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ci=new as(Q.comparator),cj=new as(Q.comparator);function ck(...a){let b=cj;for(let c of a)b=b.insert(c.key,c);return b}function cl(a){let b=cj;return a.forEach((a,c)=>b=b.insert(a,c.overlayedDocument)),b}function cm(){return co()}function cn(){return co()}function co(){return new ch(a=>a.toString(),(a,b)=>a.isEqual(b))}let cp=new as(Q.comparator),cq=new av(Q.comparator);function cr(...a){let b=cq;for(let c of a)b=b.add(c);return b}let cs=new av(H);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An event from the RemoteStore. It is split into targetChanges (changes to the
 * state or the set of documents in our watched targets) and documentUpdates
 * (changes to the actual documents).
 */ class ct{constructor(a,b,c,d,e){this.snapshotVersion=a,this.targetChanges=b,this.targetMismatches=c,this.documentUpdates=d,this.resolvedLimboDocuments=e}static createSynthesizedRemoteEventForCurrentChange(a,b){let c=new Map;return c.set(a,cu.createSynthesizedTargetChangeForCurrentChange(a,b)),new ct(L.min(),c,cs,ci,cr())}}class cu{constructor(a,b,c,d,e){this.resumeToken=a,this.current=b,this.addedDocuments=c,this.modifiedDocuments=d,this.removedDocuments=e}static createSynthesizedTargetChangeForCurrentChange(a,b){return new cu(az.EMPTY_BYTE_STRING,b,cr(),cr(),cr())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a changed document and a list of target ids to which this change
 * applies.
 *
 * If document has been deleted NoDocument will be provided.
 */ class cv{constructor(a,b,c,d){this.Tt=a,this.removedTargetIds=b,this.key=c,this.Et=d}}class cw{constructor(a,b){this.targetId=a,this.At=b}}class cx{constructor(a,b,c=az.EMPTY_BYTE_STRING,d=null){this.state=a,this.targetIds=b,this.resumeToken=c,this.cause=d}}class cy{constructor(){this.Rt=0,this.bt=cB(),this.Pt=az.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(a){a.approximateByteSize()>0&&(this.Vt=!0,this.Pt=a)}xt(){let a=cr(),b=cr(),c=cr();return this.bt.forEach((d,e)=>{switch(e){case 0:a=a.add(d);break;case 2:b=b.add(d);break;case 1:c=c.add(d);break;default:u()}}),new cu(this.Pt,this.vt,a,b,c)}Nt(){this.Vt=!1,this.bt=cB()}kt(a,b){this.Vt=!0,this.bt=this.bt.insert(a,b)}Mt(a){this.Vt=!0,this.bt=this.bt.remove(a)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class cz{constructor(a){this.Bt=a,this.Lt=new Map,this.Ut=ci,this.qt=cA(),this.Kt=new av(H)}Gt(a){for(let b of a.Tt)a.Et&&a.Et.isFoundDocument()?this.Qt(b,a.Et):this.jt(b,a.key,a.Et);for(let c of a.removedTargetIds)this.jt(c,a.key,a.Et)}Wt(a){this.forEachTarget(a,b=>{let c=this.zt(b);switch(a.state){case 0:this.Ht(b)&&c.Ct(a.resumeToken);break;case 1:c.Ft(),c.St||c.Nt(),c.Ct(a.resumeToken);break;case 2:c.Ft(),c.St||this.removeTarget(b);break;case 3:this.Ht(b)&&(c.$t(),c.Ct(a.resumeToken));break;case 4:this.Ht(b)&&(this.Jt(b),c.Ct(a.resumeToken));break;default:u()}})}forEachTarget(a,b){a.targetIds.length>0?a.targetIds.forEach(b):this.Lt.forEach((a,c)=>{this.Ht(c)&&b(c)})}Yt(a){let b=a.targetId,c=a.At.count,d=this.Xt(b);if(d){let e=d.target;if(bb(e)){if(0===c){let f=new Q(e.path);this.jt(b,f,a6.newNoDocument(f,L.min()))}else{var g;(g=1===c)||u()}}else this.Zt(b)!==c&&(this.Jt(b),this.Kt=this.Kt.add(b))}}te(a){let b=new Map;this.Lt.forEach((c,d)=>{let e=this.Xt(d);if(e){if(c.current&&bb(e.target)){let f=new Q(e.target.path);null!==this.Ut.get(f)||this.ee(d,f)||this.jt(d,f,a6.newNoDocument(f,a))}c.Dt&&(b.set(d,c.xt()),c.Nt())}});let c=cr();this.qt.forEach((a,b)=>{let d=!0;b.forEachWhile(a=>{let b=this.Xt(a);return!b||2===b.purpose||(d=!1,!1)}),d&&(c=c.add(a))}),this.Ut.forEach((b,c)=>c.setReadTime(a));let d=new ct(a,b,this.Kt,this.Ut,c);return this.Ut=ci,this.qt=cA(),this.Kt=new av(H),d}Qt(a,b){if(!this.Ht(a))return;let c=this.ee(a,b.key)?2:0;this.zt(a).kt(b.key,c),this.Ut=this.Ut.insert(b.key,b),this.qt=this.qt.insert(b.key,this.ne(b.key).add(a))}jt(a,b,c){if(!this.Ht(a))return;let d=this.zt(a);this.ee(a,b)?d.kt(b,1):d.Mt(b),this.qt=this.qt.insert(b,this.ne(b).delete(a)),c&&(this.Ut=this.Ut.insert(b,c))}removeTarget(a){this.Lt.delete(a)}Zt(a){let b=this.zt(a).xt();return this.Bt.getRemoteKeysForTarget(a).size+b.addedDocuments.size-b.removedDocuments.size}Ot(a){this.zt(a).Ot()}zt(a){let b=this.Lt.get(a);return b||(b=new cy,this.Lt.set(a,b)),b}ne(a){let b=this.qt.get(a);return b||(b=new av(H),this.qt=this.qt.insert(a,b)),b}Ht(a){let b=null!==this.Xt(a);return b||q("WatchChangeAggregator","Detected inactive target",a),b}Xt(a){let b=this.Lt.get(a);return b&&b.St?null:this.Bt.se(a)}Jt(a){this.Lt.set(a,new cy),this.Bt.getRemoteKeysForTarget(a).forEach(b=>{this.jt(a,b,null)})}ee(a,b){return this.Bt.getRemoteKeysForTarget(a).has(b)}}function cA(){return new as(Q.comparator)}function cB(){return new as(Q.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let cC={asc:"ASCENDING",desc:"DESCENDING"},cD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class cE{constructor(a,b){this.databaseId=a,this.gt=b}}function cF(a,b){return a.gt?`${new Date(1e3*b.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+b.nanoseconds).slice(-9)}Z`:{seconds:""+b.seconds,nanos:b.nanoseconds}}function cG(a,b){return a.gt?b.toBase64():b.toUint8Array()}function cH(a){var b;return!a&&u(),L.fromTimestamp(function(a){let b=aB(a);return new K(b.seconds,b.nanos)}(a))}function cI(a,b){var c;return(c=a,new N(["projects",c.projectId,"databases",c.database])).child("documents").child(b).canonicalString()}function cJ(a){var b;let c=N.fromString(a);return c1(c)||u(),c}function cK(a,b){return cI(a.databaseId,b.path)}function cL(a,b){let c=cJ(b);if(c.get(1)!==a.databaseId.projectId)throw new w(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+c.get(1)+" vs "+a.databaseId.projectId);if(c.get(3)!==a.databaseId.database)throw new w(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+c.get(3)+" vs "+a.databaseId.database);return new Q(cP(c))}function cM(a,b){return cI(a.databaseId,b)}function cN(a){let b=cJ(a);return 4===b.length?N.emptyPath():cP(b)}function cO(a){return new N(["projects",a.databaseId.projectId,"databases",a.databaseId.database]).canonicalString()}function cP(a){var b;return a.length>4&&"documents"===a.get(4)||u(),a.popFirst(5)}function cQ(a,b,c){return{name:cK(a,b),fields:c.value.mapValue.fields}}function cR(a,b,c){let d=cL(a,b.name),e=cH(b.updateTime),f=new a4({mapValue:{fields:b.fields}}),g=a6.newFoundDocument(d,e,f);return c&&g.setHasCommittedMutations(),c?g.setHasCommittedMutations():g}function cS(a,b){var c,d,e,f;let g;if(b instanceof b7)g={update:cQ(a,b.key,b.value)};else if(b instanceof cc)g={delete:cK(a,b.key)};else if(b instanceof b8)g={update:cQ(a,b.key,b.data),updateMask:c0(b.fieldMask)};else{if(!(b instanceof cd))return u();g={verify:cK(a,b.key)}}return b.fieldTransforms.length>0&&(g.updateTransforms=b.fieldTransforms.map(a=>(function(a,b){let c=b.transform;if(c instanceof bR)return{fieldPath:b.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof bS)return{fieldPath:b.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof bU)return{fieldPath:b.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof bW)return{fieldPath:b.field.canonicalString(),increment:c.yt};throw u()})(0,a))),b.precondition.isNone||(g.currentDocument=(c=a,void 0!==(d=b.precondition).updateTime?{updateTime:(e=c,cF(e,(f=d.updateTime).toTimestamp()))}:void 0!==d.exists?{exists:d.exists}:u())),g}function cT(a,b){var c;let d=b.currentDocument?void 0!==(c=b.currentDocument).updateTime?b_.updateTime(cH(c.updateTime)):void 0!==c.exists?b_.exists(c.exists):b_.none():b_.none(),e=b.updateTransforms?b.updateTransforms.map(b=>(function(a,b){let c=null;if("setToServerValue"in b){var d;"REQUEST_TIME"===b.setToServerValue||u(),c=new bR}else if("appendMissingElements"in b){let e=b.appendMissingElements.values||[];c=new bS(e)}else if("removeAllFromArray"in b){let f=b.removeAllFromArray.values||[];c=new bU(f)}else"increment"in b?c=new bW(a,b.increment):u();let g=P.fromServerFormat(b.fieldPath);return new bZ(g,c)})(a,b)):[];if(b.update){b.update.name;let f=cL(a,b.update.name),g=new a4({mapValue:{fields:b.update.fields}});if(b.updateMask){let h=function(a){let b=a.fieldPaths||[];return new ay(b.map(a=>P.fromServerFormat(a)))}(b.updateMask);return new b8(f,g,h,d,e)}return new b7(f,g,d,e)}if(b.delete){let i=cL(a,b.delete);return new cc(i,d)}if(b.verify){let j=cL(a,b.verify);return new cd(j,d)}return u()}function cU(a,b){return{documents:[cM(a,b.path)]}}function cV(a,b){var c,d,e,f;let g={structuredQuery:{}},h=b.path;null!==b.collectionGroup?(g.parent=cM(a,h),g.structuredQuery.from=[{collectionId:b.collectionGroup,allDescendants:!0}]):(g.parent=cM(a,h.popLast()),g.structuredQuery.from=[{collectionId:h.lastSegment()}]);let i=function(a){if(0===a.length)return;let b=a.map(a=>(function(a){var b;if("=="===a.op){if(aY(a.value))return{unaryFilter:{field:cY(a.field),op:"IS_NAN"}};if(aX(a.value))return{unaryFilter:{field:cY(a.field),op:"IS_NULL"}}}else if("!="===a.op){if(aY(a.value))return{unaryFilter:{field:cY(a.field),op:"IS_NOT_NAN"}};if(aX(a.value))return{unaryFilter:{field:cY(a.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cY(a.field),op:(b=a.op,cD[b]),value:a.value}}})(a));return 1===b.length?b[0]:{compositeFilter:{op:"AND",filters:b}}}(b.filters);i&&(g.structuredQuery.where=i);let j=function(a){if(0!==a.length)return a.map(a=>{var b,c;return{field:cY((b=a).field),direction:(c=b.dir,cC[c])}})}(b.orderBy);j&&(g.structuredQuery.orderBy=j);let k=(d=a,e=b.limit,d.gt||aJ(e)?e:{value:e});return null!==k&&(g.structuredQuery.limit=k),b.startAt&&(g.structuredQuery.startAt={before:(c=b.startAt).inclusive,values:c.position}),b.endAt&&(g.structuredQuery.endAt={before:!(f=b.endAt).inclusive,values:f.position}),g}function cW(a){var b,c;let d=cN(a.parent),e=a.structuredQuery,f=e.from?e.from.length:0,g=null;if(f>0){(b=1===f)||u();let h=e.from[0];h.allDescendants?g=h.collectionId:d=d.child(h.collectionId)}let i=[];e.where&&(i=cX(e.where));let j=[];e.orderBy&&(j=e.orderBy.map(a=>{var b;return b=a,new bp(cZ(b.field),function(a){switch(a){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}));let k=null,l;e.limit&&(k=aJ(l="object"==typeof(c=e.limit)?c.value:c)?null:l);let m=null;e.startAt&&(m=function(a){let b=!!a.before,c=a.values||[];return new bo(c,b)}(e.startAt));let n=null;return e.endAt&&(n=function(a){let b=!a.before,c=a.values||[];return new bo(c,b)}(e.endAt)),bu(d,g,j,i,k,"F",m,n)}function cX(a){return a?void 0!==a.unaryFilter?[c_(a)]:void 0!==a.fieldFilter?[c$(a)]:void 0!==a.compositeFilter?a.compositeFilter.filters.map(a=>cX(a)).reduce((a,b)=>a.concat(b)):u():[]}function cY(a){return{fieldPath:a.canonicalString()}}function cZ(a){return P.fromServerFormat(a.fieldPath)}function c$(a){return bf.create(cZ(a.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return u()}}(a.fieldFilter.op),a.fieldFilter.value)}function c_(a){switch(a.unaryFilter.op){case"IS_NAN":let b=cZ(a.unaryFilter.field);return bf.create(b,"==",{doubleValue:NaN});case"IS_NULL":let c=cZ(a.unaryFilter.field);return bf.create(c,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let d=cZ(a.unaryFilter.field);return bf.create(d,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let e=cZ(a.unaryFilter.field);return bf.create(e,"!=",{nullValue:"NULL_VALUE"});default:return u()}}function c0(a){let b=[];return a.fields.forEach(a=>b.push(a.canonicalString())),{fieldPaths:b}}function c1(a){return a.length>=4&&"projects"===a.get(0)&&"databases"===a.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Encodes a resource path into a IndexedDb-compatible string form.
 */ function c2(a){let b="";for(let c=0;c<a.length;c++)b.length>0&&(b=c4(b)),b=c3(a.get(c),b);return c4(b)}function c3(a,b){let c=b,d=a.length;for(let e=0;e<d;e++){let f=a.charAt(e);switch(f){case"\0":c+="\x01\x10";break;case"\x01":c+="\x01\x11";break;default:c+=f}}return c}function c4(a){return a+"\x01\x01"}function c5(a){var b,c;let d=a.length;if(d>=2||u(),2===d)return"\x01"===a.charAt(0)&&"\x01"===a.charAt(1)||u(),N.emptyPath();let e=d-2,f=[],g="";for(let h=0;h<d;){let i=a.indexOf("\x01",h);switch((i<0||i>e)&&u(),a.charAt(i+1)){case"\x01":let j=a.substring(h,i),k;0===g.length?k=j:(g+=j,k=g,g=""),f.push(k);break;case"\x10":g+=a.substring(h,i),g+="\0";break;case"\x11":g+=a.substring(h,i+1);break;default:u()}h=i+2}return new N(f)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Name of the IndexedDb object store.
 *
 * Note that the name 'owner' is chosen to ensure backwards compatibility with
 * older clients that only supported single locked access to the persistence
 * layer.
 */ /**
 * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
 * index to iterate over all at document mutations for a given path or lower.
 */ function c6(a,b){return[a,c2(b)]}function c7(a,b,c){return[a,c2(b),c]}let c8={},c9=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],da=[...c9,"documentOverlays"],db=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],dc=db,dd=[...dc,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class de extends null{constructor(a,b){super(),this.ie=a,this.currentSequenceNumber=b}}function df(a,b){var c;let d=c=a;return ae.O(d.ie,b)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A batch of mutations that will be sent as one unit to the backend.
 */ class dg{constructor(a,b,c,d){this.batchId=a,this.localWriteTime=b,this.baseMutations=c,this.mutations=d}applyToRemoteDocument(a,b){let c=b.mutationResults;for(let d=0;d<this.mutations.length;d++){let e=this.mutations[d];e.key.isEqual(a.key)&&b3(e,a,c[d])}}applyToLocalView(a,b){for(let c of this.baseMutations)c.key.isEqual(a.key)&&(b=b4(c,a,b,this.localWriteTime));for(let d of this.mutations)d.key.isEqual(a.key)&&(b=b4(d,a,b,this.localWriteTime));return b}applyToLocalDocumentSet(a,b){let c=cn();return this.mutations.forEach(d=>{let e=a.get(d.key),f=e.overlayedDocument,g=this.applyToLocalView(f,e.mutatedFields);g=b.has(d.key)?null:g;let h=b2(f,g);null!==h&&c.set(d.key,h),f.isValidDocument()||f.convertToNoDocument(L.min())}),c}keys(){return this.mutations.reduce((a,b)=>a.add(b.key),cr())}isEqual(a){return this.batchId===a.batchId&&I(this.mutations,a.mutations,(a,b)=>b6(a,b))&&I(this.baseMutations,a.baseMutations,(a,b)=>b6(a,b))}}class dh{constructor(a,b,c,d){this.batch=a,this.commitVersion=b,this.mutationResults=c,this.docVersions=d}static from(a,b,c){var d;(d=a.mutations.length===c.length)||u();let e=cp,f=a.mutations;for(let g=0;g<f.length;g++)e=e.insert(f[g].key,c[g].version);return new dh(a,b,c,e)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Representation of an overlay computed by Firestore.
 *
 * Holds information about a mutation and the largest batch id in Firestore when
 * the mutation was created.
 */ class di{constructor(a,b){this.largestBatchId=a,this.mutation=b}getKey(){return this.mutation.key}isEqual(a){return null!==a&&this.mutation===a.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An immutable set of metadata that the local store tracks for each target.
 */ class dj{constructor(a,b,c,d,e=L.min(),f=L.min(),g=az.EMPTY_BYTE_STRING){this.target=a,this.targetId=b,this.purpose=c,this.sequenceNumber=d,this.snapshotVersion=e,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=g}withSequenceNumber(a){return new dj(this.target,this.targetId,this.purpose,a,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(a,b){return new dj(this.target,this.targetId,this.purpose,this.sequenceNumber,b,this.lastLimboFreeSnapshotVersion,a)}withLastLimboFreeSnapshotVersion(a){return new dj(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,a,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Serializer for values stored in the LocalStore. */ class dk{constructor(a){this.re=a}}function dl(a,b){let c=b.key,d={prefixPath:c.getCollectionPath().popLast().toArray(),collectionGroup:c.collectionGroup,documentId:c.path.lastSegment(),readTime:dm(b.readTime),hasCommittedMutations:b.hasCommittedMutations};if(b.isFoundDocument()){var e,f;d.document=(e=a.re,{name:cK(e,(f=b).key),fields:f.data.value.mapValue.fields,updateTime:cF(e,f.version.toTimestamp())})}else if(b.isNoDocument())d.noDocument={path:c.path.toArray(),readTime:dn(b.version)};else{if(!b.isUnknownDocument())return u();d.unknownDocument={path:c.path.toArray(),version:dn(b.version)}}return d}function dm(a){let b=a.toTimestamp();return[b.seconds,b.nanoseconds]}function dn(a){let b=a.toTimestamp();return{seconds:b.seconds,nanoseconds:b.nanoseconds}}function dp(a){let b=new K(a.seconds,a.nanoseconds);return L.fromTimestamp(b)}function dq(a,b){let c=(b.baseMutations||[]).map(b=>cT(a.re,b));for(let d=0;d<b.mutations.length-1;++d){let e=b.mutations[d];if(d+1<b.mutations.length&& void 0!==b.mutations[d+1].transform){let f=b.mutations[d+1];e.updateTransforms=f.transform.fieldTransforms,b.mutations.splice(d+1,1),++d}}let g=b.mutations.map(b=>cT(a.re,b)),h=K.fromMillis(b.localWriteTimeMs);return new dg(b.batchId,h,c,g)}function dr(a){var b,c,d;let e=dp(a.readTime),f=void 0!==a.lastLimboFreeSnapshotVersion?dp(a.lastLimboFreeSnapshotVersion):L.min(),g;return void 0!==a.query.documents?(1===(b=a.query).documents.length||u(),g=bB(bv(cN(b.documents[0])))):g=bB(cW(d=a.query)),new dj(g,a.targetId,0,a.lastListenSequenceNumber,e,f,az.fromBase64String(a.resumeToken))}function ds(a,b){let c=dn(b.snapshotVersion),d=dn(b.lastLimboFreeSnapshotVersion),e;e=bb(b.target)?cU(a.re,b.target):cV(a.re,b.target);let f=b.resumeToken.toBase64();return{targetId:b.targetId,canonicalId:a9(b.target),readTime:c,resumeToken:f,lastListenSequenceNumber:b.sequenceNumber,lastLimboFreeSnapshotVersion:d,query:e}}function dt(a){let b=cW({parent:a.parent,structuredQuery:a.structuredQuery});return"LAST"===a.limitType?bC(b,b.limit,"L"):b}function du(a,b){return new di(b.largestBatchId,cT(a.re,b.overlayMutation))}function dv(a,b){let c=b.path.lastSegment();return[a,c2(b.path.popLast()),c]}function dw(a,b,c,d){return{indexId:a,uid:b.uid||"",sequenceNumber:c,readTime:dn(d.readTime),documentKey:c2(d.documentKey.path),largestBatchId:d.largestBatchId}}function dx(a){return df(a,"bundles")}function dy(a){return df(a,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Implementation of DocumentOverlayCache using IndexedDb.
 */ class dz{constructor(a,b){this.It=a,this.userId=b}static oe(a,b){let c=b.uid||"";return new dz(a,c)}getOverlay(a,b){return dA(a).get(dv(this.userId,b)).next(a=>a?du(this.It,a):null)}getOverlays(a,b){let c=cm();return ac.forEach(b,b=>this.getOverlay(a,b).next(a=>{null!==a&&c.set(b,a)})).next(()=>c)}saveOverlays(a,b,c){let d=[];return c.forEach((c,e)=>{let f=new di(b,e);d.push(this.ue(a,f))}),ac.waitFor(d)}removeOverlaysForBatchId(a,b,c){let d=new Set;b.forEach(a=>d.add(c2(a.getCollectionPath())));let e=[];return d.forEach(b=>{let d=IDBKeyRange.bound([this.userId,b,c],[this.userId,b,c+1],!1,!0);e.push(dA(a).Y("collectionPathOverlayIndex",d))}),ac.waitFor(e)}getOverlaysForCollection(a,b,c){let d=cm(),e=c2(b),f=IDBKeyRange.bound([this.userId,e,c],[this.userId,e,Number.POSITIVE_INFINITY],!0);return dA(a).W("collectionPathOverlayIndex",f).next(a=>{for(let b of a){let c=du(this.It,b);d.set(c.getKey(),c)}return d})}getOverlaysForCollectionGroup(a,b,c,d){let e=cm(),f,g=IDBKeyRange.bound([this.userId,b,c],[this.userId,b,Number.POSITIVE_INFINITY],!0);return dA(a).Z({index:"collectionGroupOverlayIndex",range:g},(a,b,c)=>{let g=du(this.It,b);e.size()<d||g.largestBatchId===f?(e.set(g.getKey(),g),f=g.largestBatchId):c.done()}).next(()=>e)}ue(a,b){return dA(a).put(function(a,b,c){let[d,e,f]=dv(b,c.mutation.key);return{userId:b,collectionPath:e,documentId:f,collectionGroup:c.mutation.key.getCollectionGroup(),largestBatchId:c.largestBatchId,overlayMutation:cS(a.re,c.mutation)}}(this.It,this.userId,b))}}function dA(a){return df(a,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Note: This code is copied from the backend. Code that is not used by
// Firestore was removed.
/** Firestore index value writer.  */ class dB{constructor(){}ce(a,b){this.ae(a,b),b.he()}ae(a,b){if("nullValue"in a)this.le(b,5);else if("booleanValue"in a)this.le(b,10),b.fe(a.booleanValue?1:0);else if("integerValue"in a)this.le(b,15),b.fe(aC(a.integerValue));else if("doubleValue"in a){let c=aC(a.doubleValue);isNaN(c)?this.le(b,13):(this.le(b,15),aK(c)?b.fe(0):b.fe(c))}else if("timestampValue"in a){let d=a.timestampValue;this.le(b,20),"string"==typeof d?b.de(d):(b.de(`${d.seconds||""}`),b.fe(d.nanos||0))}else if("stringValue"in a)this._e(a.stringValue,b),this.we(b);else if("bytesValue"in a)this.le(b,30),b.me(aD(a.bytesValue)),this.we(b);else if("referenceValue"in a)this.ge(a.referenceValue,b);else if("geoPointValue"in a){let e=a.geoPointValue;this.le(b,45),b.fe(e.latitude||0),b.fe(e.longitude||0)}else"mapValue"in a?a_(a)?this.le(b,Number.MAX_SAFE_INTEGER):(this.ye(a.mapValue,b),this.we(b)):"arrayValue"in a?(this.pe(a.arrayValue,b),this.we(b)):u()}_e(a,b){this.le(b,25),this.Ie(a,b)}Ie(a,b){b.de(a)}ye(a,b){let c=a.fields||{};for(let d of(this.le(b,55),Object.keys(c)))this._e(d,b),this.ae(c[d],b)}pe(a,b){let c=a.values||[];for(let d of(this.le(b,50),c))this.ae(d,b)}ge(a,b){this.le(b,37),Q.fromName(a).path.forEach(a=>{this.le(b,60),this.Ie(a,b)})}le(a,b){a.fe(b)}we(a){a.fe(2)}}function dC(a){if(0===a)return 8;let b=0;return a>>4==0&&(b+=4,a<<=4),a>>6==0&&(b+=2,a<<=2),a>>7==0&&(b+=1),b}function dD(a){let b=64-function(a){let b=0;for(let c=0;c<8;++c){let d=dC(255&a[c]);if(b+=d,8!==d)break}return b}(a);return Math.ceil(b/8)}dB.Te=new dB;class dE{constructor(){this.Be=new class{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ee(a){let b=a[Symbol.iterator](),c=b.next();for(;!c.done;)this.Ae(c.value),c=b.next();this.Re()}be(a){let b=a[Symbol.iterator](),c=b.next();for(;!c.done;)this.Pe(c.value),c=b.next();this.ve()}Ve(a){for(let b of a){let c=b.charCodeAt(0);if(c<128)this.Ae(c);else if(c<2048)this.Ae(960|c>>>6),this.Ae(128|63&c);else if(b<"\ud800"||"\udbff"<b)this.Ae(480|c>>>12),this.Ae(128|63&c>>>6),this.Ae(128|63&c);else{let d=b.codePointAt(0);this.Ae(240|d>>>18),this.Ae(128|63&d>>>12),this.Ae(128|63&d>>>6),this.Ae(128|63&d)}}this.Re()}Se(a){for(let b of a){let c=b.charCodeAt(0);if(c<128)this.Pe(c);else if(c<2048)this.Pe(960|c>>>6),this.Pe(128|63&c);else if(b<"\ud800"||"\udbff"<b)this.Pe(480|c>>>12),this.Pe(128|63&c>>>6),this.Pe(128|63&c);else{let d=b.codePointAt(0);this.Pe(240|d>>>18),this.Pe(128|63&d>>>12),this.Pe(128|63&d>>>6),this.Pe(128|63&d)}}this.ve()}De(a){let b=this.Ce(a),c=dD(b);this.xe(1+c),this.buffer[this.position++]=255&c;for(let d=b.length-c;d<b.length;++d)this.buffer[this.position++]=255&b[d]}Ne(a){let b=this.Ce(a),c=dD(b);this.xe(1+c),this.buffer[this.position++]=~(255&c);for(let d=b.length-c;d<b.length;++d)this.buffer[this.position++]=~(255&b[d])}ke(){this.Me(255),this.Me(255)}Oe(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(a){this.xe(a.length),this.buffer.set(a,this.position),this.position+=a.length}$e(){return this.buffer.slice(0,this.position)}Ce(a){let b=function(a){let b=new DataView(new ArrayBuffer(8));return b.setFloat64(0,a,!1),new Uint8Array(b.buffer)}(a),c=0!=(128&b[0]);b[0]^=c?255:128;for(let d=1;d<b.length;++d)b[d]^=c?255:0;return b}Ae(a){let b=255&a;0===b?(this.Me(0),this.Me(255)):255===b?(this.Me(255),this.Me(0)):this.Me(b)}Pe(a){let b=255&a;0===b?(this.Fe(0),this.Fe(255)):255===b?(this.Fe(255),this.Fe(0)):this.Fe(a)}Re(){this.Me(0),this.Me(1)}ve(){this.Fe(0),this.Fe(1)}Me(a){this.xe(1),this.buffer[this.position++]=a}Fe(a){this.xe(1),this.buffer[this.position++]=~a}xe(a){let b=a+this.position;if(b<=this.buffer.length)return;let c=2*this.buffer.length;c<b&&(c=b);let d=new Uint8Array(c);d.set(this.buffer),this.buffer=d}},this.Le=new class{constructor(a){this.Be=a}me(a){this.Be.Ee(a)}de(a){this.Be.Ve(a)}fe(a){this.Be.De(a)}he(){this.Be.ke()}}(this.Be),this.Ue=new class{constructor(a){this.Be=a}me(a){this.Be.be(a)}de(a){this.Be.Se(a)}fe(a){this.Be.Ne(a)}he(){this.Be.Oe()}}(this.Be)}seed(a){this.Be.seed(a)}qe(a){return 0===a?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Represents an index entry saved by the SDK in persisted storage. */ class dF{constructor(a,b,c,d){this.indexId=a,this.documentKey=b,this.arrayValue=c,this.directionalValue=d}Ke(){let a=this.directionalValue.length,b=0===a||255===this.directionalValue[a-1]?a+1:a,c=new Uint8Array(b);return c.set(this.directionalValue,0),b!==a?c.set([0],this.directionalValue.length):++c[c.length-1],new dF(this.indexId,this.documentKey,this.arrayValue,c)}}function dG(a,b){let c=a.indexId-b.indexId;return 0!==c?c:0!==(c=dH(a.arrayValue,b.arrayValue))?c:0!==(c=dH(a.directionalValue,b.directionalValue))?c:Q.comparator(a.documentKey,b.documentKey)}function dH(a,b){for(let c=0;c<a.length&&c<b.length;++c){let d=a[c]-b[c];if(0!==d)return d}return a.length-b.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A light query planner for Firestore.
 *
 * This class matches a `FieldIndex` against a Firestore Query `Target`. It
 * determines whether a given index can be used to serve the specified target.
 *
 * The following table showcases some possible index configurations:
 *
 * Query                                               | Index
 * -----------------------------------------------------------------------------
 * where('a', '==', 'a').where('b', '==', 'b')         | a ASC, b DESC
 * where('a', '==', 'a').where('b', '==', 'b')         | a ASC
 * where('a', '==', 'a').where('b', '==', 'b')         | b DESC
 * where('a', '>=', 'a').orderBy('a')                  | a ASC
 * where('a', '>=', 'a').orderBy('a', 'desc')          | a DESC
 * where('a', '>=', 'a').orderBy('a').orderBy('b')     | a ASC, b ASC
 * where('a', '>=', 'a').orderBy('a').orderBy('b')     | a ASC
 * where('a', 'array-contains', 'a').orderBy('b')      | a CONTAINS, b ASCENDING
 * where('a', 'array-contains', 'a').orderBy('b')      | a CONTAINS
 */ class dI{constructor(a){for(let b of(this.collectionId=null!=a.collectionGroup?a.collectionGroup:a.path.lastSegment(),this.Ge=a.orderBy,this.Qe=[],a.filters)){let c=b;c.dt()?this.je=c:this.Qe.push(c)}}We(a){let b=S(a);if(void 0!==b&&!this.ze(b))return!1;let c=T(a),d=0,e=0;for(;d<c.length&&this.ze(c[d]);++d);if(d===c.length)return!0;if(void 0!==this.je){let f=c[d];if(!this.He(this.je,f)||!this.Je(this.Ge[e++],f))return!1;++d}for(;d<c.length;++d){let g=c[d];if(e>=this.Ge.length||!this.Je(this.Ge[e++],g))return!1}return!0}ze(a){for(let b of this.Qe)if(this.He(b,a))return!0;return!1}He(a,b){if(void 0===a||!a.field.isEqual(b.fieldPath))return!1;let c="array-contains"===a.op||"array-contains-any"===a.op;return 2===b.kind===c}Je(a,b){return!!a.field.isEqual(b.fieldPath)&&(0===b.kind&&"asc"===a.dir||1===b.kind&&"desc"===a.dir)}}class dJ{constructor(){this.index={}}add(a){let b=a.lastSegment(),c=a.popLast(),d=this.index[b]||new av(N.comparator),e=!d.has(c);return this.index[b]=d.add(c),e}has(a){let b=a.lastSegment(),c=a.popLast(),d=this.index[b];return d&&d.has(c)}getEntries(a){return(this.index[a]||new av(N.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let dK=new Uint8Array(0);class dL{constructor(a,b){this.user=a,this.databaseId=b,this.Xe=new dJ,this.Ze=new ch(a=>a9(a),(a,b)=>ba(a,b)),this.uid=a.uid||""}addToCollectionParentIndex(a,b){if(!this.Xe.has(b)){let c=b.lastSegment(),d=b.popLast();a.addOnCommittedListener(()=>{this.Xe.add(b)});let e={collectionId:c,parent:c2(d)};return dM(a).put(e)}return ac.resolve()}getCollectionParents(a,b){let c=[],d=IDBKeyRange.bound([b,""],[J(b),""],!1,!0);return dM(a).W(d).next(a=>{for(let d of a){if(d.collectionId!==b)break;c.push(c5(d.parent))}return c})}addFieldIndex(a,b){var c;let d=dO(a),e={indexId:(c=b).indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])};delete e.indexId;let f=d.add(e);if(b.indexState){let g=dP(a);return f.next(a=>{g.put(dw(a,this.user,b.indexState.sequenceNumber,b.indexState.offset))})}return f.next()}deleteFieldIndex(a,b){let c=dO(a),d=dP(a),e=dN(a);return c.delete(b.indexId).next(()=>d.delete(IDBKeyRange.bound([b.indexId],[b.indexId+1],!1,!0))).next(()=>e.delete(IDBKeyRange.bound([b.indexId],[b.indexId+1],!1,!0)))}getDocumentsMatchingTarget(a,b){let c=dN(a),d=!0,e=new Map;return ac.forEach(this.tn(b),b=>this.en(a,b).next(a=>{d&&(d=!!a),e.set(b,a)})).next(()=>{if(d){let a=cr(),f=[];return ac.forEach(e,(d,e)=>{var g;q("IndexedDbIndexManager",`Using index ${(g=d,`id=${g.indexId}|cg=${g.collectionGroup}|f=${g.fields.map(a=>`${a.fieldPath}:${a.kind}`).join(",")}`)} to execute ${a9(b)}`);let h=function(a,b){let c=S(b);if(void 0===c)return null;for(let d of bc(a,c.fieldPath))switch(d.op){case"array-contains-any":return d.value.arrayValue.values||[];case"array-contains":return[d.value]}return null}(e,d),i=function(a,b){let c=new Map;for(let d of T(b))for(let e of bc(a,d.fieldPath))switch(e.op){case"==":case"in":c.set(d.fieldPath.canonicalString(),e.value);break;case"not-in":case"!=":return c.set(d.fieldPath.canonicalString(),e.value),Array.from(c.values())}return null}(e,d),j=function(a,b){let c=[],d=!0;for(let e of T(b)){let f=0===e.kind?bd(a,e.fieldPath,a.startAt):be(a,e.fieldPath,a.startAt);c.push(f.value),d&&(d=f.inclusive)}return new bo(c,d)}(e,d),k=function(a,b){let c=[],d=!0;for(let e of T(b)){let f=0===e.kind?be(a,e.fieldPath,a.endAt):bd(a,e.fieldPath,a.endAt);c.push(f.value),d&&(d=f.inclusive)}return new bo(c,d)}(e,d),l=this.nn(d,e,j),m=this.nn(d,e,k),n=this.sn(d,e,i),o=this.rn(d.indexId,h,l,j.inclusive,m,k.inclusive,n);return ac.forEach(o,d=>c.J(d,b.limit).next(b=>{b.forEach(b=>{let c=Q.fromSegments(b.documentKey);a.has(c)||(a=a.add(c),f.push(c))})}))}).next(()=>f)}return ac.resolve(null)})}tn(a){let b=this.Ze.get(a);return b||(b=[a],this.Ze.set(a,b),b)}rn(a,b,c,d,e,f,g){let h=(null!=b?b.length:1)*Math.max(c.length,e.length),i=h/(null!=b?b.length:1),j=[];for(let k=0;k<h;++k){let l=b?this.on(b[k/i]):dK,m=this.un(a,l,c[k%i],d),n=this.cn(a,l,e[k%i],f),o=g.map(b=>this.un(a,l,b,!0));j.push(...this.createRange(m,n,o))}return j}un(a,b,c,d){let e=new dF(a,Q.empty(),b,c);return d?e:e.Ke()}cn(a,b,c,d){let e=new dF(a,Q.empty(),b,c);return d?e.Ke():e}en(a,b){let c=new dI(b),d=null!=b.collectionGroup?b.collectionGroup:b.path.lastSegment();return this.getFieldIndexes(a,d).next(a=>{let b=null;for(let d of a)c.We(d)&&(!b||d.fields.length>b.fields.length)&&(b=d);return b})}getIndexType(a,b){let c=2;return ac.forEach(this.tn(b),b=>this.en(a,b).next(a=>{a?0!==c&&a.fields.length<function(a){let b=new av(P.comparator),c=!1;for(let d of a.filters){let e=d;e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?c=!0:b=b.add(e.field))}for(let f of a.orderBy)f.field.isKeyField()||(b=b.add(f.field));return b.size+(c?1:0)}(b)&&(c=1):c=0})).next(()=>c)}an(a,b){let c=new dE;for(let d of T(a)){let e=b.data.field(d.fieldPath);if(null==e)return null;let f=c.qe(d.kind);dB.Te.ce(e,f)}return c.$e()}on(a){let b=new dE;return dB.Te.ce(a,b.qe(0)),b.$e()}hn(a,b){let c=new dE;return dB.Te.ce(aU(this.databaseId,b),c.qe(function(a){let b=T(a);return 0===b.length?0:b[b.length-1].kind}(a))),c.$e()}sn(a,b,c){if(null===c)return[];let d=[];d.push(new dE);let e=0;for(let f of T(a)){let g=c[e++];for(let h of d)if(this.ln(b,f.fieldPath)&&aW(g))d=this.fn(d,f,g);else{let i=h.qe(f.kind);dB.Te.ce(g,i)}}return this.dn(d)}nn(a,b,c){return this.sn(a,b,c.position)}dn(a){let b=[];for(let c=0;c<a.length;++c)b[c]=a[c].$e();return b}fn(a,b,c){let d=[...a],e=[];for(let f of c.arrayValue.values||[])for(let g of d){let h=new dE;h.seed(g.$e()),dB.Te.ce(f,h.qe(b.kind)),e.push(h)}return e}ln(a,b){return!!a.filters.find(a=>a instanceof bf&&a.field.isEqual(b)&&("in"===a.op||"not-in"===a.op))}getFieldIndexes(a,b){let c=dO(a),d=dP(a);return(b?c.W("collectionGroupIndex",IDBKeyRange.bound(b,b)):c.W()).next(a=>{let b=[];return ac.forEach(a,a=>d.get([a.indexId,this.uid]).next(c=>{b.push(function(a,b){let c=b?new W(b.sequenceNumber,new Z(dp(b.readTime),new Q(c5(b.documentKey)),b.largestBatchId)):W.empty(),d=a.fields.map(([a,b])=>new U(P.fromServerFormat(a),b));return new R(a.indexId,a.collectionGroup,d,c)}(a,c))})).next(()=>b)})}getNextCollectionGroupToUpdate(a){return this.getFieldIndexes(a).next(a=>0===a.length?null:(a.sort((a,b)=>{let c=a.indexState.sequenceNumber-b.indexState.sequenceNumber;return 0!==c?c:H(a.collectionGroup,b.collectionGroup)}),a[0].collectionGroup))}updateCollectionGroup(a,b,c){let d=dO(a),e=dP(a);return this._n(a).next(a=>d.W("collectionGroupIndex",IDBKeyRange.bound(b,b)).next(b=>ac.forEach(b,b=>e.put(dw(b.indexId,this.user,a,c)))))}updateIndexEntries(a,b){let c=new Map;return ac.forEach(b,(b,d)=>{let e=c.get(b.collectionGroup);return(e?ac.resolve(e):this.getFieldIndexes(a,b.collectionGroup)).next(e=>(c.set(b.collectionGroup,e),ac.forEach(e,c=>this.wn(a,b,c).next(b=>{let e=this.mn(d,c);return b.isEqual(e)?ac.resolve():this.gn(a,d,c,b,e)}))))})}yn(a,b,c,d){return dN(a).put({indexId:d.indexId,uid:this.uid,arrayValue:d.arrayValue,directionalValue:d.directionalValue,orderedDocumentKey:this.hn(c,b.key),documentKey:b.key.path.toArray()})}pn(a,b,c,d){return dN(a).delete([d.indexId,this.uid,d.arrayValue,d.directionalValue,this.hn(c,b.key),b.key.path.toArray()])}wn(a,b,c){let d=dN(a),e=new av(dG);return d.Z({index:"documentKeyIndex",range:IDBKeyRange.only([c.indexId,this.uid,this.hn(c,b)])},(a,d)=>{e=e.add(new dF(c.indexId,b,d.arrayValue,d.directionalValue))}).next(()=>e)}mn(a,b){let c=new av(dG),d=this.an(b,a);if(null==d)return c;let e=S(b);if(null!=e){let f=a.data.field(e.fieldPath);if(aW(f))for(let g of f.arrayValue.values||[])c=c.add(new dF(b.indexId,a.key,this.on(g),d))}else c=c.add(new dF(b.indexId,a.key,dK,d));return c}gn(a,b,c,d,e){q("IndexedDbIndexManager","Updating index entries for document '%s'",b.key);let f=[];return function(a,b,c,d,e){let f=a.getIterator(),g=b.getIterator(),h=ax(f),i=ax(g);for(;h||i;){let j=!1,k=!1;if(h&&i){let l=c(h,i);l<0?k=!0:l>0&&(j=!0)}else null!=h?k=!0:j=!0;j?(d(i),i=ax(g)):k?(e(h),h=ax(f)):(h=ax(f),i=ax(g))}}(d,e,dG,d=>{f.push(this.yn(a,b,c,d))},d=>{f.push(this.pn(a,b,c,d))}),ac.waitFor(f)}_n(a){let b=1;return dP(a).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(a,c,d)=>{d.done(),b=c.sequenceNumber+1}).next(()=>b)}createRange(a,b,c){c=c.sort((a,b)=>dG(a,b)).filter((a,b,c)=>!b||0!==dG(a,c[b-1]));let d=[];for(let e of(d.push(a),c)){let f=dG(e,a),g=dG(e,b);if(0===f)d[0]=a.Ke();else if(f>0&&g<0)d.push(e),d.push(e.Ke());else if(g>0)break}d.push(b);let h=[];for(let i=0;i<d.length;i+=2)h.push(IDBKeyRange.bound([d[i].indexId,this.uid,d[i].arrayValue,d[i].directionalValue,dK,[]],[d[i+1].indexId,this.uid,d[i+1].arrayValue,d[i+1].directionalValue,dK,[]]));return h}getMinOffsetFromCollectionGroup(a,b){return this.getFieldIndexes(a,b).next(dQ)}getMinOffset(a,b){return ac.mapArray(this.tn(b),b=>this.en(a,b).next(a=>a||u())).next(dQ)}}function dM(a){return df(a,"collectionParents")}function dN(a){return df(a,"indexEntries")}function dO(a){return df(a,"indexConfiguration")}function dP(a){return df(a,"indexState")}function dQ(a){var b;(b=0!==a.length)||u();let c=a[0].indexState.offset,d=c.largestBatchId;for(let e=1;e<a.length;e++){let f=a[e].indexState.offset;0>$(f,c)&&(c=f),d<f.largestBatchId&&(d=f.largestBatchId)}return new Z(c.readTime,c.documentKey,d)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let dR={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class dS{constructor(a,b,c){this.cacheSizeCollectionThreshold=a,this.percentileToCollect=b,this.maximumSequenceNumbersToCollect=c}static withCacheSize(a){return new dS(a,dS.DEFAULT_COLLECTION_PERCENTILE,dS.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Delete a mutation batch and the associated document mutations.
 * @returns A PersistencePromise of the document mutations that were removed.
 */ function dT(a,b,c){let d=a.store("mutations"),e=a.store("documentMutations"),f=[],g=IDBKeyRange.only(c.batchId),h=0,i=d.Z({range:g},(a,b,c)=>(h++,c.delete()));f.push(i.next(()=>{var a;(a=1===h)||u()}));let j=[];for(let k of c.mutations){let l=c7(b,k.key.path,c.batchId);f.push(e.delete(l)),j.push(k.key)}return ac.waitFor(f).next(()=>j)}function dU(a){if(!a)return 0;let b;if(a.document)b=a.document;else if(a.unknownDocument)b=a.unknownDocument;else{if(!a.noDocument)throw u();b=a.noDocument}return JSON.stringify(b).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** A mutation queue for a specific user, backed by IndexedDB. */ dS.DEFAULT_COLLECTION_PERCENTILE=10,dS.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dS.DEFAULT=new dS(41943040,dS.DEFAULT_COLLECTION_PERCENTILE,dS.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dS.DISABLED=new dS(-1,0,0);class dV{constructor(a,b,c,d){this.userId=a,this.It=b,this.indexManager=c,this.referenceDelegate=d,this.In={}}static oe(a,b,c,d){var e;(e=""!==a.uid)||u();let f=a.isAuthenticated()?a.uid:"";return new dV(f,b,c,d)}checkEmpty(a){let b=!0,c=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return dX(a).Z({index:"userMutationsIndex",range:c},(a,c,d)=>{b=!1,d.done()}).next(()=>b)}addMutationBatch(a,b,c,d){let e=dY(a),f=dX(a);return f.add({}).next(g=>{var h;(h="number"==typeof g)||u();let i=new dg(g,b,c,d),j=function(a,b,c){let d=c.baseMutations.map(b=>cS(a.re,b)),e=c.mutations.map(b=>cS(a.re,b));return{userId:b,batchId:c.batchId,localWriteTimeMs:c.localWriteTime.toMillis(),baseMutations:d,mutations:e}}(this.It,this.userId,i),k=[],l=new av((a,b)=>H(a.canonicalString(),b.canonicalString()));for(let m of d){let n=c7(this.userId,m.key.path,g);l=l.add(m.key.path.popLast()),k.push(f.put(j)),k.push(e.put(n,c8))}return l.forEach(b=>{k.push(this.indexManager.addToCollectionParentIndex(a,b))}),a.addOnCommittedListener(()=>{this.In[g]=i.keys()}),ac.waitFor(k).next(()=>i)})}lookupMutationBatch(a,b){return dX(a).get(b).next(a=>{var b;return a?(a.userId===this.userId||u(),dq(this.It,a)):null})}Tn(a,b){return this.In[b]?ac.resolve(this.In[b]):this.lookupMutationBatch(a,b).next(a=>{if(a){let c=a.keys();return this.In[b]=c,c}return null})}getNextMutationBatchAfterBatchId(a,b){let c=b+1,d=IDBKeyRange.lowerBound([this.userId,c]),e=null;return dX(a).Z({index:"userMutationsIndex",range:d},(a,b,d)=>{var f;b.userId===this.userId&&(b.batchId>=c||u(),e=dq(this.It,b)),d.done()}).next(()=>e)}getHighestUnacknowledgedBatchId(a){let b=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),c=-1;return dX(a).Z({index:"userMutationsIndex",range:b,reverse:!0},(a,b,d)=>{c=b.batchId,d.done()}).next(()=>c)}getAllMutationBatches(a){let b=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return dX(a).W("userMutationsIndex",b).next(a=>a.map(a=>dq(this.It,a)))}getAllMutationBatchesAffectingDocumentKey(a,b){let c=c6(this.userId,b.path),d=IDBKeyRange.lowerBound(c),e=[];return dY(a).Z({range:d},(c,d,f)=>{let[g,h,i]=c,j=c5(h);if(g===this.userId&&b.path.isEqual(j))return dX(a).get(i).next(a=>{var b;if(!a)throw u();a.userId===this.userId||u(),e.push(dq(this.It,a))});f.done()}).next(()=>e)}getAllMutationBatchesAffectingDocumentKeys(a,b){let c=new av(H),d=[];return b.forEach(b=>{let e=c6(this.userId,b.path),f=IDBKeyRange.lowerBound(e),g=dY(a).Z({range:f},(a,d,e)=>{let[f,g,h]=a,i=c5(g);f===this.userId&&b.path.isEqual(i)?c=c.add(h):e.done()});d.push(g)}),ac.waitFor(d).next(()=>this.En(a,c))}getAllMutationBatchesAffectingQuery(a,b){let c=b.path,d=c.length+1,e=c6(this.userId,c),f=IDBKeyRange.lowerBound(e),g=new av(H);return dY(a).Z({range:f},(a,b,e)=>{let[f,h,i]=a,j=c5(h);f===this.userId&&c.isPrefixOf(j)?j.length===d&&(g=g.add(i)):e.done()}).next(()=>this.En(a,g))}En(a,b){let c=[],d=[];return b.forEach(b=>{d.push(dX(a).get(b).next(a=>{var b;if(null===a)throw u();a.userId===this.userId||u(),c.push(dq(this.It,a))}))}),ac.waitFor(d).next(()=>c)}removeMutationBatch(a,b){return dT(a.ie,this.userId,b).next(c=>(a.addOnCommittedListener(()=>{this.An(b.batchId)}),ac.forEach(c,b=>this.referenceDelegate.markPotentiallyOrphaned(a,b))))}An(a){delete this.In[a]}performConsistencyCheck(a){return this.checkEmpty(a).next(b=>{if(!b)return ac.resolve();let c=IDBKeyRange.lowerBound([this.userId]),d=[];return dY(a).Z({range:c},(a,b,c)=>{if(a[0]===this.userId){let e=c5(a[1]);d.push(e)}else c.done()}).next(()=>{var a;(a=0===d.length)||u()})})}containsKey(a,b){return dW(a,this.userId,b)}Rn(a){return dZ(a).get(this.userId).next(a=>a||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function dW(a,b,c){let d=c6(b,c.path),e=d[1],f=IDBKeyRange.lowerBound(d),g=!1;return dY(a).Z({range:f,X:!0},(a,c,d)=>{let[f,h,i]=a;f===b&&h===e&&(g=!0),d.done()}).next(()=>g)}function dX(a){return df(a,"mutations")}function dY(a){return df(a,"documentMutations")}function dZ(a){return df(a,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Offset to ensure non-overlapping target ids. */ /**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */ class d${constructor(a){this.bn=a}next(){return this.bn+=2,this.bn}static Pn(){return new d$(0)}static vn(){return new d$(-1)}}function d_(a){return df(a,"targets")}function d0(a){return df(a,"targetGlobal")}function d1(a){return df(a,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function d2([a,b],[c,d]){let e=H(a,c);return 0===e?H(b,d):e}class d3{constructor(a){this.xn=a,this.buffer=new av(d2),this.Nn=0}kn(){return++this.Nn}Mn(a){let b=[a,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(b);else{let c=this.buffer.last();0>d2(b,c)&&(this.buffer=this.buffer.delete(c).add(b))}}get maxValue(){return this.buffer.last()[0]}}class d4{constructor(a,b,c){this.garbageCollector=a,this.asyncQueue=b,this.localStore=c,this.On=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Fn(6e4)}stop(){this.On&&(this.On.cancel(),this.On=null)}get started(){return null!==this.On}Fn(a){q("LruGarbageCollector",`Garbage collection scheduled in ${a}ms`),this.On=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",a,async()=>{this.On=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(a){ah(a)?q("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",a):await ab(a)}await this.Fn(3e5)})}}function d5(a,b){var c,d;return d1(a).put((c=b,d=a.currentSequenceNumber,{targetId:0,path:c2(c.path),sequenceNumber:d}))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory buffer of entries to be written to a RemoteDocumentCache.
 * It can be used to batch up a set of changes to be written to the cache, but
 * additionally supports reading entries back with the `getEntry()` method,
 * falling back to the underlying RemoteDocumentCache if no entry is
 * buffered.
 *
 * Entries added to the cache *must* be read first. This is to facilitate
 * calculating the size delta of the pending changes.
 *
 * PORTING NOTE: This class was implemented then removed from other platforms.
 * If byte-counting ends up being needed on the other platforms, consider
 * porting this class as part of that implementation work.
 */ class d6{constructor(){this.changes=new ch(a=>a.toString(),(a,b)=>a.isEqual(b)),this.changesApplied=!1}addEntry(a){this.assertNotApplied(),this.changes.set(a.key,a)}removeEntry(a,b){this.assertNotApplied(),this.changes.set(a,a6.newInvalidDocument(a).setReadTime(b))}getEntry(a,b){this.assertNotApplied();let c=this.changes.get(b);return void 0!==c?ac.resolve(c):this.getFromCache(a,b)}getEntries(a,b){return this.getAllFromCache(a,b)}apply(a){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(a)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newIndexedDbRemoteDocumentCache()`.
 */ class d7{constructor(a){this.It=a}setIndexManager(a){this.indexManager=a}addEntry(a,b,c){return eb(a).put(c)}removeEntry(a,b,c){return eb(a).delete(function(a,b){let c=a.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],dm(b),c[c.length-1]]}(b,c))}updateMetadata(a,b){return this.getMetadata(a).next(c=>(c.byteSize+=b,this.Qn(a,c)))}getEntry(a,b){let c=a6.newInvalidDocument(b);return eb(a).Z({index:"documentKeyIndex",range:IDBKeyRange.only(ec(b))},(a,d)=>{c=this.jn(b,d)}).next(()=>c)}Wn(a,b){let c={size:0,document:a6.newInvalidDocument(b)};return eb(a).Z({index:"documentKeyIndex",range:IDBKeyRange.only(ec(b))},(a,d)=>{c={document:this.jn(b,d),size:dU(d)}}).next(()=>c)}getEntries(a,b){let c=ci;return this.zn(a,b,(a,b)=>{let d=this.jn(a,b);c=c.insert(a,d)}).next(()=>c)}Hn(a,b){let c=ci,d=new as(Q.comparator);return this.zn(a,b,(a,b)=>{let e=this.jn(a,b);c=c.insert(a,e),d=d.insert(a,dU(b))}).next(()=>({documents:c,Jn:d}))}zn(a,b,c){if(b.isEmpty())return ac.resolve();let d=new av(ee);b.forEach(a=>d=d.add(a));let e=IDBKeyRange.bound(ec(d.first()),ec(d.last())),f=d.getIterator(),g=f.getNext();return eb(a).Z({index:"documentKeyIndex",range:e},(a,b,d)=>{let e=Q.fromSegments([...b.prefixPath,b.collectionGroup,b.documentId]);for(;g&&0>ee(g,e);)c(g,null),g=f.getNext();g&&g.isEqual(e)&&(c(g,b),g=f.hasNext()?f.getNext():null),g?d.j(ec(g)):d.done()}).next(()=>{for(;g;)c(g,null),g=f.hasNext()?f.getNext():null})}getAllFromCollection(a,b,c){let d=[b.popLast().toArray(),b.lastSegment(),dm(c.readTime),c.documentKey.path.isEmpty()?"":c.documentKey.path.lastSegment()],e=[b.popLast().toArray(),b.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return eb(a).W(IDBKeyRange.bound(d,e,!0)).next(a=>{let b=ci;for(let c of a){let d=this.jn(Q.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);b=b.insert(d.key,d)}return b})}getAllFromCollectionGroup(a,b,c,d){let e=ci,f=ed(b,c),g=ed(b,Z.max());return eb(a).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(f,g,!0)},(a,b,c)=>{let f=this.jn(Q.fromSegments(b.prefixPath.concat(b.collectionGroup,b.documentId)),b);(e=e.insert(f.key,f)).size===d&&c.done()}).next(()=>e)}newChangeBuffer(a){return new d9(this,!!a&&a.trackRemovals)}getSize(a){return this.getMetadata(a).next(a=>a.byteSize)}getMetadata(a){return ea(a).get("remoteDocumentGlobalKey").next(a=>{var b;return!a&&u(),a})}Qn(a,b){return ea(a).put("remoteDocumentGlobalKey",b)}jn(a,b){if(b){let c=function(a,b){let c;if(b.document)c=cR(a.re,b.document,!!b.hasCommittedMutations);else if(b.noDocument){let d=Q.fromSegments(b.noDocument.path),e=dp(b.noDocument.readTime);c=a6.newNoDocument(d,e),b.hasCommittedMutations&&c.setHasCommittedMutations()}else{if(!b.unknownDocument)return u();{let f=Q.fromSegments(b.unknownDocument.path),g=dp(b.unknownDocument.version);c=a6.newUnknownDocument(f,g)}}return b.readTime&&c.setReadTime(function(a){let b=new K(a[0],a[1]);return L.fromTimestamp(b)}(b.readTime)),c}(this.It,b);if(!(c.isNoDocument()&&c.version.isEqual(L.min())))return c}return a6.newInvalidDocument(a)}}function d8(a){return new d7(a)}class d9 extends null{constructor(a,b){super(),this.Yn=a,this.trackRemovals=b,this.Xn=new ch(a=>a.toString(),(a,b)=>a.isEqual(b))}applyChanges(a){let b=[],c=0,d=new av((a,b)=>H(a.canonicalString(),b.canonicalString()));return this.changes.forEach((e,f)=>{let g=this.Xn.get(e);if(b.push(this.Yn.removeEntry(a,e,g.readTime)),f.isValidDocument()){let h=dl(this.Yn.It,f);d=d.add(e.path.popLast());let i=dU(h);c+=i-g.size,b.push(this.Yn.addEntry(a,e,h))}else if(c-=g.size,this.trackRemovals){let j=dl(this.Yn.It,f.convertToNoDocument(L.min()));b.push(this.Yn.addEntry(a,e,j))}}),d.forEach(c=>{b.push(this.Yn.indexManager.addToCollectionParentIndex(a,c))}),b.push(this.Yn.updateMetadata(a,c)),ac.waitFor(b)}getFromCache(a,b){return this.Yn.Wn(a,b).next(a=>(this.Xn.set(b,{size:a.size,readTime:a.document.readTime}),a.document))}getAllFromCache(a,b){return this.Yn.Hn(a,b).next(({documents:a,Jn:b})=>(b.forEach((b,c)=>{this.Xn.set(b,{size:c,readTime:a.get(b).readTime})}),a))}}function ea(a){return df(a,"remoteDocumentGlobal")}function eb(a){return df(a,"remoteDocumentsV14")}function ec(a){let b=a.path.toArray();return[b.slice(0,b.length-2),b[b.length-2],b[b.length-1]]}function ed(a,b){let c=b.documentKey.path.toArray();return[a,dm(b.readTime),c.slice(0,c.length-2),c.length>0?c[c.length-1]:""]}function ee(a,b){let c=a.path.toArray(),d=b.path.toArray(),e=0;for(let f=0;f<c.length-2&&f<d.length-2;++f)if(e=H(c[f],d[f]))return e;return(e=H(c.length,d.length))||(e=H(c[c.length-2],d[d.length-2]))||H(c[c.length-1],d[d.length-1])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Schema Version for the Web client:
 * 1.  Initial version including Mutation Queue, Query Cache, and Remote
 *     Document Cache
 * 2.  Used to ensure a targetGlobal object exists and add targetCount to it. No
 *     longer required because migration 3 unconditionally clears it.
 * 3.  Dropped and re-created Query Cache to deal with cache corruption related
 *     to limbo resolution. Addresses
 *     https://github.com/firebase/firebase-ios-sdk/issues/1548
 * 4.  Multi-Tab Support.
 * 5.  Removal of held write acks.
 * 6.  Create document global for tracking document cache size.
 * 7.  Ensure every cached document has a sentinel row with a sequence number.
 * 8.  Add collection-parent index for Collection Group queries.
 * 9.  Change RemoteDocumentChanges store to be keyed by readTime rather than
 *     an auto-incrementing ID. This is required for Index-Free queries.
 * 10. Rewrite the canonical IDs to the explicit Protobuf-based format.
 * 11. Add bundles and named_queries for bundle support.
 * 12. Add document overlays.
 * 13. Rewrite the keys of the remote document cache to allow for efficient
 *     document lookup via `getAll()`.
 * 14. Add overlays.
 * 15. Add indexing support.
 */ /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a local view (overlay) of a document, and the fields that are
 * locally mutated.
 */ class ef{constructor(a,b){this.overlayedDocument=a,this.mutatedFields=b}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */ class eg{constructor(a,b,c,d){this.remoteDocumentCache=a,this.mutationQueue=b,this.documentOverlayCache=c,this.indexManager=d}getDocument(a,b){let c=null;return this.documentOverlayCache.getOverlay(a,b).next(d=>(c=d,this.getBaseDocument(a,b,c))).next(a=>(null!==c&&b4(c.mutation,a,ay.empty(),K.now()),a))}getDocuments(a,b){return this.remoteDocumentCache.getEntries(a,b).next(b=>this.getLocalViewOfDocuments(a,b,cr()).next(()=>b))}getLocalViewOfDocuments(a,b,c=cr()){let d=cm();return this.populateOverlays(a,d,b).next(()=>this.computeViews(a,b,d,c).next(a=>{let b=ck();return a.forEach((a,c)=>{b=b.insert(a,c.overlayedDocument)}),b}))}getOverlayedDocuments(a,b){let c=cm();return this.populateOverlays(a,c,b).next(()=>this.computeViews(a,b,c,cr()))}populateOverlays(a,b,c){let d=[];return c.forEach(a=>{b.has(a)||d.push(a)}),this.documentOverlayCache.getOverlays(a,d).next(a=>{a.forEach((a,c)=>{b.set(a,c)})})}computeViews(a,b,c,d){let e=ci,f=co(),g=co();return b.forEach((a,b)=>{let g=c.get(b.key);d.has(b.key)&&(void 0===g||g.mutation instanceof b8)?e=e.insert(b.key,b):void 0!==g&&(f.set(b.key,g.mutation.getFieldMask()),b4(g.mutation,b,g.mutation.getFieldMask(),K.now()))}),this.recalculateAndSaveOverlays(a,e).next(a=>(a.forEach((a,b)=>f.set(a,b)),b.forEach((a,b)=>{var c;return g.set(a,new ef(b,null!==(c=f.get(a))&& void 0!==c?c:null))}),g))}recalculateAndSaveOverlays(a,b){let c=co(),d=new as((a,b)=>a-b),e=cr();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(a,b).next(a=>{for(let e of a)e.keys().forEach(a=>{let f=b.get(a);if(null===f)return;let g=c.get(a)||ay.empty();g=e.applyToLocalView(f,g),c.set(a,g);let h=(d.get(e.batchId)||cr()).add(a);d=d.insert(e.batchId,h)})}).next(()=>{let f=[],g=d.getReverseIterator();for(;g.hasNext();){let h=g.getNext(),i=h.key,j=h.value,k=cn();j.forEach(a=>{if(!e.has(a)){let d=b2(b.get(a),c.get(a));null!==d&&k.set(a,d),e=e.add(a)}}),f.push(this.documentOverlayCache.saveOverlays(a,i,k))}return ac.waitFor(f)}).next(()=>c)}recalculateAndSaveOverlaysForDocumentKeys(a,b){return this.remoteDocumentCache.getEntries(a,b).next(b=>this.recalculateAndSaveOverlays(a,b))}getDocumentsMatchingQuery(a,b,c){var d;return(d=b,Q.isDocumentKey(d.path)&&null===d.collectionGroup&&0===d.filters.length)?this.getDocumentsMatchingDocumentQuery(a,b.path):bz(b)?this.getDocumentsMatchingCollectionGroupQuery(a,b,c):this.getDocumentsMatchingCollectionQuery(a,b,c)}getNextDocuments(a,b,c,d){return this.remoteDocumentCache.getAllFromCollectionGroup(a,b,c,d).next(e=>{let f=d-e.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(a,b,c.largestBatchId,d-e.size):ac.resolve(cm()),g=-1,h=e;return f.next(b=>ac.forEach(b,(b,c)=>(g<c.largestBatchId&&(g=c.largestBatchId),e.get(b)?ac.resolve():this.getBaseDocument(a,b,c).next(a=>{h=h.insert(b,a)}))).next(()=>this.populateOverlays(a,b,e)).next(()=>this.computeViews(a,h,b,cr())).next(a=>({batchId:g,changes:cl(a)})))})}getDocumentsMatchingDocumentQuery(a,b){return this.getDocument(a,new Q(b)).next(a=>{let b=ck();return a.isFoundDocument()&&(b=b.insert(a.key,a)),b})}getDocumentsMatchingCollectionGroupQuery(a,b,c){let d=b.collectionGroup,e=ck();return this.indexManager.getCollectionParents(a,d).next(f=>ac.forEach(f,f=>{var g,h;let i=(g=b,h=f.child(d),new bt(h,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt));return this.getDocumentsMatchingCollectionQuery(a,i,c).next(a=>{a.forEach((a,b)=>{e=e.insert(a,b)})})}).next(()=>e))}getDocumentsMatchingCollectionQuery(a,b,c){let d;return this.remoteDocumentCache.getAllFromCollection(a,b.path,c).next(e=>(d=e,this.documentOverlayCache.getOverlaysForCollection(a,b.path,c.largestBatchId))).next(a=>{a.forEach((a,b)=>{let c=b.getKey();null===d.get(c)&&(d=d.insert(c,a6.newInvalidDocument(c)))});let c=ck();return d.forEach((d,e)=>{let f=a.get(d);void 0!==f&&b4(f.mutation,e,ay.empty(),K.now()),bG(b,e)&&(c=c.insert(d,e))}),c})}getBaseDocument(a,b,c){return null===c||1===c.mutation.type?this.remoteDocumentCache.getEntry(a,b):ac.resolve(a6.newInvalidDocument(b))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory implementation of DocumentOverlayCache.
 */ class eh{constructor(){this.overlays=new as(Q.comparator),this.es=new Map}getOverlay(a,b){return ac.resolve(this.overlays.get(b))}getOverlays(a,b){let c=cm();return ac.forEach(b,b=>this.getOverlay(a,b).next(a=>{null!==a&&c.set(b,a)})).next(()=>c)}saveOverlays(a,b,c){return c.forEach((c,d)=>{this.ue(a,b,d)}),ac.resolve()}removeOverlaysForBatchId(a,b,c){let d=this.es.get(c);return void 0!==d&&(d.forEach(a=>this.overlays=this.overlays.remove(a)),this.es.delete(c)),ac.resolve()}getOverlaysForCollection(a,b,c){let d=cm(),e=b.length+1,f=new Q(b.child("")),g=this.overlays.getIteratorFrom(f);for(;g.hasNext();){let h=g.getNext().value,i=h.getKey();if(!b.isPrefixOf(i.path))break;i.path.length===e&&h.largestBatchId>c&&d.set(h.getKey(),h)}return ac.resolve(d)}getOverlaysForCollectionGroup(a,b,c,d){let e=new as((a,b)=>a-b),f=this.overlays.getIterator();for(;f.hasNext();){let g=f.getNext().value;if(g.getKey().getCollectionGroup()===b&&g.largestBatchId>c){let h=e.get(g.largestBatchId);null===h&&(h=cm(),e=e.insert(g.largestBatchId,h)),h.set(g.getKey(),g)}}let i=cm(),j=e.getIterator();for(;j.hasNext()&&(j.getNext().value.forEach((a,b)=>i.set(a,b)),!(i.size()>=d)););return ac.resolve(i)}ue(a,b,c){let d=this.overlays.get(c.key);if(null!==d){let e=this.es.get(d.largestBatchId).delete(c.key);this.es.set(d.largestBatchId,e)}this.overlays=this.overlays.insert(c.key,new di(b,c));let f=this.es.get(b);void 0===f&&(f=cr(),this.es.set(b,f)),this.es.set(b,f.add(c.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */ class ei{constructor(){this.ns=new av(ej.ss),this.rs=new av(ej.os)}isEmpty(){return this.ns.isEmpty()}addReference(a,b){let c=new ej(a,b);this.ns=this.ns.add(c),this.rs=this.rs.add(c)}us(a,b){a.forEach(a=>this.addReference(a,b))}removeReference(a,b){this.cs(new ej(a,b))}hs(a,b){a.forEach(a=>this.removeReference(a,b))}ls(a){let b=new Q(new N([])),c=new ej(b,a),d=new ej(b,a+1),e=[];return this.rs.forEachInRange([c,d],a=>{this.cs(a),e.push(a.key)}),e}fs(){this.ns.forEach(a=>this.cs(a))}cs(a){this.ns=this.ns.delete(a),this.rs=this.rs.delete(a)}ds(a){let b=new Q(new N([])),c=new ej(b,a),d=new ej(b,a+1),e=cr();return this.rs.forEachInRange([c,d],a=>{e=e.add(a.key)}),e}containsKey(a){let b=new ej(a,0),c=this.ns.firstAfterOrEqual(b);return null!==c&&a.isEqual(c.key)}}class ej{constructor(a,b){this.key=a,this._s=b}static ss(a,b){return Q.comparator(a.key,b.key)||H(a._s,b._s)}static os(a,b){return H(a._s,b._s)||Q.comparator(a.key,b.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ek{constructor(a,b){this.indexManager=a,this.referenceDelegate=b,this.mutationQueue=[],this.ws=1,this.gs=new av(ej.ss)}checkEmpty(a){return ac.resolve(0===this.mutationQueue.length)}addMutationBatch(a,b,c,d){let e=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let f=new dg(e,b,c,d);for(let g of(this.mutationQueue.push(f),d))this.gs=this.gs.add(new ej(g.key,e)),this.indexManager.addToCollectionParentIndex(a,g.key.path.popLast());return ac.resolve(f)}lookupMutationBatch(a,b){return ac.resolve(this.ys(b))}getNextMutationBatchAfterBatchId(a,b){let c=this.ps(b+1),d=c<0?0:c;return ac.resolve(this.mutationQueue.length>d?this.mutationQueue[d]:null)}getHighestUnacknowledgedBatchId(){return ac.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(a){return ac.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(a,b){let c=new ej(b,0),d=new ej(b,Number.POSITIVE_INFINITY),e=[];return this.gs.forEachInRange([c,d],a=>{let b=this.ys(a._s);e.push(b)}),ac.resolve(e)}getAllMutationBatchesAffectingDocumentKeys(a,b){let c=new av(H);return b.forEach(a=>{let b=new ej(a,0),d=new ej(a,Number.POSITIVE_INFINITY);this.gs.forEachInRange([b,d],a=>{c=c.add(a._s)})}),ac.resolve(this.Is(c))}getAllMutationBatchesAffectingQuery(a,b){let c=b.path,d=c.length+1,e=c;Q.isDocumentKey(e)||(e=e.child(""));let f=new ej(new Q(e),0),g=new av(H);return this.gs.forEachWhile(a=>{let b=a.key.path;return!!c.isPrefixOf(b)&&(b.length===d&&(g=g.add(a._s)),!0)},f),ac.resolve(this.Is(g))}Is(a){let b=[];return a.forEach(a=>{let c=this.ys(a);null!==c&&b.push(c)}),b}removeMutationBatch(a,b){var c;0===this.Ts(b.batchId,"removed")||u(),this.mutationQueue.shift();let d=this.gs;return ac.forEach(b.mutations,c=>{let e=new ej(c.key,b.batchId);return d=d.delete(e),this.referenceDelegate.markPotentiallyOrphaned(a,c.key)}).next(()=>{this.gs=d})}An(a){}containsKey(a,b){let c=new ej(b,0),d=this.gs.firstAfterOrEqual(c);return ac.resolve(b.isEqual(d&&d.key))}performConsistencyCheck(a){return this.mutationQueue.length,ac.resolve()}Ts(a,b){return this.ps(a)}ps(a){return 0===this.mutationQueue.length?0:a-this.mutationQueue[0].batchId}ys(a){let b=this.ps(a);return b<0||b>=this.mutationQueue.length?null:this.mutationQueue[b]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The memory-only RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newMemoryRemoteDocumentCache()`.
 */ class el{constructor(a){this.Es=a,this.docs=new as(Q.comparator),this.size=0}setIndexManager(a){this.indexManager=a}addEntry(a,b){let c=b.key,d=this.docs.get(c),e=d?d.size:0,f=this.Es(b);return this.docs=this.docs.insert(c,{document:b.mutableCopy(),size:f}),this.size+=f-e,this.indexManager.addToCollectionParentIndex(a,c.path.popLast())}removeEntry(a){let b=this.docs.get(a);b&&(this.docs=this.docs.remove(a),this.size-=b.size)}getEntry(a,b){let c=this.docs.get(b);return ac.resolve(c?c.document.mutableCopy():a6.newInvalidDocument(b))}getEntries(a,b){let c=ci;return b.forEach(a=>{let b=this.docs.get(a);c=c.insert(a,b?b.document.mutableCopy():a6.newInvalidDocument(a))}),ac.resolve(c)}getAllFromCollection(a,b,c){let d=ci,e=new Q(b.child("")),f=this.docs.getIteratorFrom(e);for(;f.hasNext();){let{key:g,value:{document:h}}=f.getNext();if(!b.isPrefixOf(g.path))break;g.path.length>b.length+1||0>=$(Y(h),c)||(d=d.insert(h.key,h.mutableCopy()))}return ac.resolve(d)}getAllFromCollectionGroup(a,b,c,d){u()}As(a,b){return ac.forEach(this.docs,a=>b(a))}newChangeBuffer(a){return new em(this)}getSize(a){return ac.resolve(this.size)}}class em extends d6{constructor(a){super(),this.Yn=a}applyChanges(a){let b=[];return this.changes.forEach((c,d)=>{d.isValidDocument()?b.push(this.Yn.addEntry(a,d)):this.Yn.removeEntry(c)}),ac.waitFor(b)}getFromCache(a,b){return this.Yn.getEntry(a,b)}getAllFromCache(a,b){return this.Yn.getEntries(a,b)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */ class en{constructor(a,b){this.Vs={},this.overlays={},this.Ss=new ao(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=a(this),this.Cs=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a){this.persistence=a,this.Rs=new ch(a=>a9(a),ba),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.bs=0,this.Ps=new ei,this.targetCount=0,this.vs=d$.Pn()}forEachTarget(a,b){return this.Rs.forEach((a,c)=>b(c)),ac.resolve()}getLastRemoteSnapshotVersion(a){return ac.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(a){return ac.resolve(this.bs)}allocateTargetId(a){return this.highestTargetId=this.vs.next(),ac.resolve(this.highestTargetId)}setTargetsMetadata(a,b,c){return c&&(this.lastRemoteSnapshotVersion=c),b>this.bs&&(this.bs=b),ac.resolve()}Dn(a){this.Rs.set(a.target,a);let b=a.targetId;b>this.highestTargetId&&(this.vs=new d$(b),this.highestTargetId=b),a.sequenceNumber>this.bs&&(this.bs=a.sequenceNumber)}addTargetData(a,b){return this.Dn(b),this.targetCount+=1,ac.resolve()}updateTargetData(a,b){return this.Dn(b),ac.resolve()}removeTargetData(a,b){return this.Rs.delete(b.target),this.Ps.ls(b.targetId),this.targetCount-=1,ac.resolve()}removeTargets(a,b,c){let d=0,e=[];return this.Rs.forEach((f,g)=>{g.sequenceNumber<=b&&null===c.get(g.targetId)&&(this.Rs.delete(f),e.push(this.removeMatchingKeysForTargetId(a,g.targetId)),d++)}),ac.waitFor(e).next(()=>d)}getTargetCount(a){return ac.resolve(this.targetCount)}getTargetData(a,b){let c=this.Rs.get(b)||null;return ac.resolve(c)}addMatchingKeys(a,b,c){return this.Ps.us(b,c),ac.resolve()}removeMatchingKeys(a,b,c){this.Ps.hs(b,c);let d=this.persistence.referenceDelegate,e=[];return d&&b.forEach(b=>{e.push(d.markPotentiallyOrphaned(a,b))}),ac.waitFor(e)}removeMatchingKeysForTargetId(a,b){return this.Ps.ls(b),ac.resolve()}getMatchingKeysForTargetId(a,b){let c=this.Ps.ds(b);return ac.resolve(c)}containsKey(a,b){return ac.resolve(this.Ps.containsKey(b))}}(this),this.indexManager=new /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory implementation of IndexManager.
 */ class{constructor(){this.Ye=new dJ}addToCollectionParentIndex(a,b){return this.Ye.add(b),ac.resolve()}getCollectionParents(a,b){return ac.resolve(this.Ye.getEntries(b))}addFieldIndex(a,b){return ac.resolve()}deleteFieldIndex(a,b){return ac.resolve()}getDocumentsMatchingTarget(a,b){return ac.resolve(null)}getIndexType(a,b){return ac.resolve(0)}getFieldIndexes(a,b){return ac.resolve([])}getNextCollectionGroupToUpdate(a){return ac.resolve(null)}getMinOffset(a,b){return ac.resolve(Z.min())}getMinOffsetFromCollectionGroup(a,b){return ac.resolve(Z.min())}updateCollectionGroup(a,b,c){return ac.resolve()}updateIndexEntries(a,b){return ac.resolve()}},this.remoteDocumentCache=function(a){return new el(a)}(a=>this.referenceDelegate.xs(a)),this.It=new dk(b),this.Ns=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a){this.It=a,this.Zn=new Map,this.ts=new Map}getBundleMetadata(a,b){return ac.resolve(this.Zn.get(b))}saveBundleMetadata(a,b){var c;return this.Zn.set(b.id,{id:(c=b).id,version:c.version,createTime:cH(c.createTime)}),ac.resolve()}getNamedQuery(a,b){return ac.resolve(this.ts.get(b))}saveNamedQuery(a,b){var c;return this.ts.set(b.name,{name:(c=b).name,query:dt(c.bundledQuery),readTime:cH(c.readTime)}),ac.resolve()}}(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(a){return this.indexManager}getDocumentOverlayCache(a){let b=this.overlays[a.toKey()];return b||(b=new eh,this.overlays[a.toKey()]=b),b}getMutationQueue(a,b){let c=this.Vs[a.toKey()];return c||(c=new ek(b,this.referenceDelegate),this.Vs[a.toKey()]=c),c}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(a,b,c){q("MemoryPersistence","Starting transaction:",a);let d=new eo(this.Ss.next());return this.referenceDelegate.ks(),c(d).next(a=>this.referenceDelegate.Ms(d).next(()=>a)).toPromise().then(a=>(d.raiseOnCommittedEvent(),a))}Os(a,b){return ac.or(Object.values(this.Vs).map(c=>()=>c.containsKey(a,b)))}}class eo extends aa{constructor(a){super(),this.currentSequenceNumber=a}}class ep{constructor(a){this.persistence=a,this.Fs=new ei,this.$s=null}static Bs(a){return new ep(a)}get Ls(){if(this.$s)return this.$s;throw u()}addReference(a,b,c){return this.Fs.addReference(c,b),this.Ls.delete(c.toString()),ac.resolve()}removeReference(a,b,c){return this.Fs.removeReference(c,b),this.Ls.add(c.toString()),ac.resolve()}markPotentiallyOrphaned(a,b){return this.Ls.add(b.toString()),ac.resolve()}removeTarget(a,b){this.Fs.ls(b.targetId).forEach(a=>this.Ls.add(a.toString()));let c=this.persistence.getTargetCache();return c.getMatchingKeysForTargetId(a,b.targetId).next(a=>{a.forEach(a=>this.Ls.add(a.toString()))}).next(()=>c.removeTargetData(a,b))}ks(){this.$s=new Set}Ms(a){let b=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ac.forEach(this.Ls,c=>{let d=Q.fromPath(c);return this.Us(a,d).next(a=>{a||b.removeEntry(d,L.min())})}).next(()=>(this.$s=null,b.apply(a)))}updateLimboDocument(a,b){return this.Us(a,b).next(a=>{a?this.Ls.delete(b.toString()):this.Ls.add(b.toString())})}xs(a){return 0}Us(a,b){return ac.or([()=>ac.resolve(this.Fs.containsKey(b)),()=>this.persistence.getTargetCache().containsKey(a,b),()=>this.persistence.Os(a,b)])}}function eq(a){a.createObjectStore("targetDocuments",{keyPath:null}).createIndex("documentTargetsIndex",null,{unique:!0}),a.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",null,{unique:!0}),a.createObjectStore("targetGlobal")}let er="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class es{constructor(a,b,c,d,e,f,g,h,i,j,k=15){if(this.allowTabSynchronization=a,this.persistenceKey=b,this.clientId=c,this.Hs=e,this.window=f,this.document=g,this.Js=i,this.Ys=j,this.Xs=k,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=a=>Promise.resolve(),!es.C())throw new w(v.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Provides LRU functionality for IndexedDB persistence. */ class{constructor(a,b){var c,d;this.db=a,this.garbageCollector=(c=this,d=b,new class a{constructor(a,b){this.$n=a,this.params=b}calculateTargetCount(a,b){return this.$n.Bn(a).next(a=>Math.floor(b/100*a))}nthSequenceNumber(a,b){if(0===b)return ac.resolve(ao.at);let c=new d3(b);return this.$n.forEachTarget(a,a=>c.Mn(a.sequenceNumber)).next(()=>this.$n.Ln(a,a=>c.Mn(a))).next(()=>c.maxValue)}removeTargets(a,b,c){return this.$n.removeTargets(a,b,c)}removeOrphanedDocuments(a,b){return this.$n.removeOrphanedDocuments(a,b)}collect(a,b){return -1===this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector","Garbage collection skipped; disabled"),ac.resolve(dR)):this.getCacheSize(a).next(c=>c<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${c} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),dR):this.Un(a,b))}getCacheSize(a){return this.$n.getCacheSize(a)}Un(a,b){let c,d,e,f,g,h,i,j=Date.now();return this.calculateTargetCount(a,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),d=this.params.maximumSequenceNumbersToCollect):d=b,f=Date.now(),this.nthSequenceNumber(a,d))).next(d=>(c=d,g=Date.now(),this.removeTargets(a,c,b))).next(b=>(e=b,h=Date.now(),this.removeOrphanedDocuments(a,c))).next(a=>(i=Date.now(),p()<=LogLevel.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-j}ms
	Determined least recently used ${d} in `+(g-f)+"ms\n"+`	Removed ${e} targets in `+(h-g)+"ms\n"+`	Removed ${a} documents in `+(i-h)+"ms\n"+`Total Duration: ${i-j}ms`),ac.resolve({didRun:!0,sequenceNumbersCollected:d,targetsRemoved:e,documentsRemoved:a})))}}(c,d))}Bn(a){let b=this.qn(a);return this.db.getTargetCache().getTargetCount(a).next(a=>b.next(b=>a+b))}qn(a){let b=0;return this.Ln(a,a=>{b++}).next(()=>b)}forEachTarget(a,b){return this.db.getTargetCache().forEachTarget(a,b)}Ln(a,b){return this.Kn(a,(a,c)=>b(c))}addReference(a,b,c){return d5(a,c)}removeReference(a,b,c){return d5(a,c)}removeTargets(a,b,c){return this.db.getTargetCache().removeTargets(a,b,c)}markPotentiallyOrphaned(a,b){return d5(a,b)}Gn(a,b){var c,d;let e;return c=a,d=b,e=!1,dZ(c).tt(a=>dW(c,a,d).next(a=>(a&&(e=!0),ac.resolve(!a)))).next(()=>e)}removeOrphanedDocuments(a,b){let c=this.db.getRemoteDocumentCache().newChangeBuffer(),d=[],e=0;return this.Kn(a,(f,g)=>{if(g<=b){let h=this.Gn(a,f).next(b=>{if(!b)return e++,c.getEntry(a,f).next(()=>(c.removeEntry(f,L.min()),d1(a).delete([0,c2(f.path)])))});d.push(h)}}).next(()=>ac.waitFor(d)).next(()=>c.apply(a)).next(()=>e)}removeTarget(a,b){let c=b.withSequenceNumber(a.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(a,c)}updateLimboDocument(a,b){return d5(a,b)}Kn(a,b){let c=d1(a),d,e=ao.at;return c.Z({index:"documentTargetsIndex"},([a,c],{path:f,sequenceNumber:g})=>{0===a?(e!==ao.at&&b(new Q(c5(d)),e),e=g,d=f):e=ao.at}).next(()=>{e!==ao.at&&b(new Q(c5(d)),e)})}getCacheSize(a){return this.db.getRemoteDocumentCache().getSize(a)}}(this,d),this.ii=b+"main",this.It=new dk(h),this.ri=new ae(this.ii,this.Xs,new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Performs database creation and schema upgrades. */ class{constructor(a){this.It=a}$(a,b,c,d){var e,f;let g=new ad("createOrUpgrade",b);c<1&&d>=1&&(function(a){a.createObjectStore("owner")}(a),(e=a).createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",null,{unique:!0}),e.createObjectStore("documentMutations"),eq(a),function(a){a.createObjectStore("remoteDocuments")}(a));let h=ac.resolve();return c<3&&d>=3&&(0!==c&&((f=a).deleteObjectStore("targetDocuments"),f.deleteObjectStore("targets"),f.deleteObjectStore("targetGlobal"),eq(a)),h=h.next(()=>(function(a){let b=a.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:L.min().toTimestamp(),targetCount:0};return b.put("targetGlobalKey",c)})(g))),c<4&&d>=4&&(0!==c&&(h=h.next(()=>{var b,c;return b=a,(c=g).store("mutations").W().next(a=>{b.deleteObjectStore("mutations"),b.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",null,{unique:!0});let d=c.store("mutations"),e=a.map(a=>d.put(a));return ac.waitFor(e)})})),h=h.next(()=>{!function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})}(a)})),c<5&&d>=5&&(h=h.next(()=>this.qs(g))),c<6&&d>=6&&(h=h.next(()=>((function(a){a.createObjectStore("remoteDocumentGlobal")})(a),this.Ks(g)))),c<7&&d>=7&&(h=h.next(()=>this.Gs(g))),c<8&&d>=8&&(h=h.next(()=>this.Qs(a,g))),c<9&&d>=9&&(h=h.next(()=>{var b;(b=a).objectStoreNames.contains("remoteDocumentChanges")&&b.deleteObjectStore("remoteDocumentChanges")})),c<10&&d>=10&&(h=h.next(()=>this.js(g))),c<11&&d>=11&&(h=h.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(a),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(a)})),c<12&&d>=12&&(h=h.next(()=>{!function(a){let b=a.createObjectStore("documentOverlays",{keyPath:null});b.createIndex("collectionPathOverlayIndex",null,{unique:!1}),b.createIndex("collectionGroupOverlayIndex",null,{unique:!1})}(a)})),c<13&&d>=13&&(h=h.next(()=>(function(a){let b=a.createObjectStore("remoteDocumentsV14",{keyPath:null});b.createIndex("documentKeyIndex",null),b.createIndex("collectionGroupIndex",null)})(a)).next(()=>this.Ws(a,g)).next(()=>a.deleteObjectStore("remoteDocuments"))),c<14&&d>=14&&(h=h.next(()=>this.zs(a,g))),c<15&&d>=15&&(h=h.next(()=>{var b;(b=a).createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),b.createObjectStore("indexState",{keyPath:null}).createIndex("sequenceNumberIndex",null,{unique:!1}),b.createObjectStore("indexEntries",{keyPath:null}).createIndex("documentKeyIndex",null,{unique:!1})})),h}Ks(a){let b=0;return a.store("remoteDocuments").Z((a,c)=>{b+=dU(c)}).next(()=>{let c={byteSize:b};return a.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",c)})}qs(a){let b=a.store("mutationQueues"),c=a.store("mutations");return b.W().next(b=>ac.forEach(b,b=>{let d=IDBKeyRange.bound([b.userId,-1],[b.userId,b.lastAcknowledgedBatchId]);return c.W("userMutationsIndex",d).next(c=>ac.forEach(c,c=>{var d;(d=c.userId===b.userId)||u();let e=dq(this.It,c);return dT(a,b.userId,e).next(()=>{})}))}))}Gs(a){let b=a.store("targetDocuments"),c=a.store("remoteDocuments");return a.store("targetGlobal").get("targetGlobalKey").next(a=>{let d=[];return c.Z((c,e)=>{var f;let g=new N(c),h=[0,c2(f=g)];d.push(b.get(h).next(c=>{var d;return c?ac.resolve():(d=g,b.put({targetId:0,path:c2(d),sequenceNumber:a.highestListenSequenceNumber}))}))}).next(()=>ac.waitFor(d))})}Qs(a,b){a.createObjectStore("collectionParents",{keyPath:null});let c=b.store("collectionParents"),d=new dJ,e=a=>{if(d.add(a)){let b=a.lastSegment(),e=a.popLast();return c.put({collectionId:b,parent:c2(e)})}};return b.store("remoteDocuments").Z({X:!0},(a,b)=>{let c=new N(a);return e(c.popLast())}).next(()=>b.store("documentMutations").Z({X:!0},([a,b,c],d)=>{let f=c5(b);return e(f.popLast())}))}js(a){let b=a.store("targets");return b.Z((a,c)=>{let d=dr(c),e=ds(this.It,d);return b.put(e)})}Ws(a,b){let c=b.store("remoteDocuments"),d=[];return c.Z((a,c)=>{var e;let f=b.store("remoteDocumentsV14"),g=((e=c).document?new Q(N.fromString(e.document.name).popFirst(5)):e.noDocument?Q.fromSegments(e.noDocument.path):e.unknownDocument?Q.fromSegments(e.unknownDocument.path):u()).path.toArray(),h={prefixPath:g.slice(0,g.length-2),collectionGroup:g[g.length-2],documentId:g[g.length-1],readTime:c.readTime||[0,0],unknownDocument:c.unknownDocument,noDocument:c.noDocument,document:c.document,hasCommittedMutations:!!c.hasCommittedMutations};d.push(f.put(h))}).next(()=>ac.waitFor(d))}zs(a,b){let c=b.store("mutations"),d=d8(this.It),e=new en(ep.Bs,this.It.re);return c.W().next(a=>{let c=new Map;return a.forEach(a=>{var b;let d=null!==(b=c.get(a.userId))&& void 0!==b?b:cr();dq(this.It,a).keys().forEach(a=>d=d.add(a)),c.set(a.userId,d)}),ac.forEach(c,(a,c)=>{let f=new m(c),g=dz.oe(this.It,f),h=e.getIndexManager(f),i=dV.oe(f,this.It,h,e.referenceDelegate);return new eg(d,i,g,h).recalculateAndSaveOverlaysForDocumentKeys(new de(b,ao.at),a).next()})})}}(this.It)),this.Cs=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a,b){this.referenceDelegate=a,this.It=b}allocateTargetId(a){return this.Vn(a).next(b=>{let c=new d$(b.highestTargetId);return b.highestTargetId=c.next(),this.Sn(a,b).next(()=>b.highestTargetId)})}getLastRemoteSnapshotVersion(a){return this.Vn(a).next(a=>L.fromTimestamp(new K(a.lastRemoteSnapshotVersion.seconds,a.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(a){return this.Vn(a).next(a=>a.highestListenSequenceNumber)}setTargetsMetadata(a,b,c){return this.Vn(a).next(d=>(d.highestListenSequenceNumber=b,c&&(d.lastRemoteSnapshotVersion=c.toTimestamp()),b>d.highestListenSequenceNumber&&(d.highestListenSequenceNumber=b),this.Sn(a,d)))}addTargetData(a,b){return this.Dn(a,b).next(()=>this.Vn(a).next(c=>(c.targetCount+=1,this.Cn(b,c),this.Sn(a,c))))}updateTargetData(a,b){return this.Dn(a,b)}removeTargetData(a,b){return this.removeMatchingKeysForTargetId(a,b.targetId).next(()=>d_(a).delete(b.targetId)).next(()=>this.Vn(a)).next(b=>{var c;return b.targetCount>0||u(),b.targetCount-=1,this.Sn(a,b)})}removeTargets(a,b,c){let d=0,e=[];return d_(a).Z((f,g)=>{let h=dr(g);h.sequenceNumber<=b&&null===c.get(h.targetId)&&(d++,e.push(this.removeTargetData(a,h)))}).next(()=>ac.waitFor(e)).next(()=>d)}forEachTarget(a,b){return d_(a).Z((a,c)=>{let d=dr(c);b(d)})}Vn(a){return d0(a).get("targetGlobalKey").next(a=>{var b;return null!==a||u(),a})}Sn(a,b){return d0(a).put("targetGlobalKey",b)}Dn(a,b){return d_(a).put(ds(this.It,b))}Cn(a,b){let c=!1;return a.targetId>b.highestTargetId&&(b.highestTargetId=a.targetId,c=!0),a.sequenceNumber>b.highestListenSequenceNumber&&(b.highestListenSequenceNumber=a.sequenceNumber,c=!0),c}getTargetCount(a){return this.Vn(a).next(a=>a.targetCount)}getTargetData(a,b){let c=a9(b),d=IDBKeyRange.bound([c,Number.NEGATIVE_INFINITY],[c,Number.POSITIVE_INFINITY]),e=null;return d_(a).Z({range:d,index:"queryTargetsIndex"},(a,c,d)=>{let f=dr(c);ba(b,f.target)&&(e=f,d.done())}).next(()=>e)}addMatchingKeys(a,b,c){let d=[],e=d1(a);return b.forEach(b=>{let f=c2(b.path);d.push(e.put({targetId:c,path:f})),d.push(this.referenceDelegate.addReference(a,c,b))}),ac.waitFor(d)}removeMatchingKeys(a,b,c){let d=d1(a);return ac.forEach(b,b=>{let e=c2(b.path);return ac.waitFor([d.delete([c,e]),this.referenceDelegate.removeReference(a,c,b)])})}removeMatchingKeysForTargetId(a,b){let c=d1(a),d=IDBKeyRange.bound([b],[b+1],!1,!0);return c.delete(d)}getMatchingKeysForTargetId(a,b){let c=IDBKeyRange.bound([b],[b+1],!1,!0),d=d1(a),e=cr();return d.Z({range:c,X:!0},(a,b,c)=>{let d=c5(a[1]),f=new Q(d);e=e.add(f)}).next(()=>e)}containsKey(a,b){let c=c2(b.path),d=IDBKeyRange.bound([c],[J(c)],!1,!0),e=0;return d1(a).Z({index:"documentTargetsIndex",X:!0,range:d},([a,b],c,d)=>{0!==a&&(e++,d.done())}).next(()=>e>0)}se(a,b){return d_(a).get(b).next(a=>a?dr(a):null)}}(this.referenceDelegate,this.It),this.remoteDocumentCache=d8(this.It),this.Ns=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{getBundleMetadata(a,b){return dx(a).get(b).next(a=>{var b;if(a)return{id:(b=a).bundleId,createTime:dp(b.createTime),version:b.version}})}saveBundleMetadata(a,b){var c;return dx(a).put({bundleId:(c=b).id,createTime:dn(cH(c.createTime)),version:c.version})}getNamedQuery(a,b){return dy(a).get(b).next(a=>{var b;if(a)return{name:(b=a).name,query:dt(b.bundledQuery),readTime:dp(b.readTime)}})}saveNamedQuery(a,b){var c;return dy(a).put({name:(c=b).name,readTime:dn(cH(c.readTime)),bundledQuery:c.bundledQuery})}},this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,!1===j&&r("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new w(v.FAILED_PRECONDITION,er);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",a=>this.Cs.getHighestSequenceNumber(a))}).then(a=>{this.Ss=new ao(a,this.Js)}).then(()=>{this.Ds=!0}).catch(a=>(this.ri&&this.ri.close(),Promise.reject(a)))}li(a){return this.si=async b=>{if(this.started)return a(b)},a(this.isPrimary)}setDatabaseDeletedListener(a){this.ri.L(async b=>{null===b.newVersion&&await a()})}setNetworkEnabled(a){this.networkEnabled!==a&&(this.networkEnabled=a,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",a=>eu(a).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(a).next(a=>{a||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(a)).next(b=>this.isPrimary&&!b?this._i(a).next(()=>!1):!!b&&this.wi(a).next(()=>!0))).catch(a=>{if(ah(a))return q("IndexedDbPersistence","Failed to extend owner lease: ",a),this.isPrimary;if(!this.allowTabSynchronization)throw a;return q("IndexedDbPersistence","Releasing owner lease after error during lease refresh",a),!1}).then(a=>{this.isPrimary!==a&&this.Hs.enqueueRetryable(()=>this.si(a)),this.isPrimary=a})}fi(a){return et(a).get("owner").next(a=>ac.resolve(this.mi(a)))}gi(a){return eu(a).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();let a=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",a=>{let b=df(a,"clientMetadata");return b.W().next(a=>{let c=this.Ii(a,18e5),d=a.filter(a=>-1===c.indexOf(a));return ac.forEach(d,a=>b.delete(a.clientId)).next(()=>d)})}).catch(()=>[]);if(this.oi)for(let b of a)this.oi.removeItem(this.Ti(b.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(a){return!!a&&a.ownerId===this.clientId}di(a){return this.Ys?ac.resolve(!0):et(a).get("owner").next(b=>{if(null!==b&&this.pi(b.leaseTimestampMs,5e3)&&!this.Ei(b.ownerId)){if(this.mi(b)&&this.networkEnabled)return!0;if(!this.mi(b)){if(!b.allowTabSynchronization)throw new w(v.FAILED_PRECONDITION,er);return!1}}return!(!this.networkEnabled||!this.inForeground)||eu(a).W().next(a=>void 0===this.Ii(a,5e3).find(a=>{if(this.clientId!==a.clientId){let b=!this.networkEnabled&&a.networkEnabled,c=!this.inForeground&&a.inForeground,d=this.networkEnabled===a.networkEnabled;if(b||c&&d)return!0}return!1}))}).next(a=>(this.isPrimary!==a&&q("IndexedDbPersistence",`Client ${a?"is":"is not"} eligible for a primary lease.`),a))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],a=>{let b=new de(a,ao.at);return this._i(b).next(()=>this.gi(b))}),this.ri.close(),this.Pi()}Ii(a,b){return a.filter(a=>this.pi(a.updateTimeMs,b)&&!this.Ei(a.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",a=>eu(a).W().next(a=>this.Ii(a,18e5).map(a=>a.clientId)))}get started(){return this.Ds}getMutationQueue(a,b){return dV.oe(a,this.It,b,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(a){return new dL(a,this.It.re.databaseId)}getDocumentOverlayCache(a){return dz.oe(this.It,a)}getBundleCache(){return this.Ns}runTransaction(a,b,c){var d;q("IndexedDbPersistence","Starting transaction:",a);let e=15===(d=this.Xs)?dd:14===d?dc:13===d?db:12===d?da:11===d?c9:void u(),f;return this.ri.runTransaction(a,"readonly"===b?"readonly":"readwrite",e,d=>(f=new de(d,this.Ss?this.Ss.next():ao.at),"readwrite-primary"===b?this.fi(f).next(a=>!!a||this.di(f)).next(b=>{if(!b)throw r(`Failed to obtain primary lease for action '${a}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new w(v.FAILED_PRECONDITION,_);return c(f)}).next(a=>this.wi(f).next(()=>a)):this.Vi(f).next(()=>c(f)))).then(a=>(f.raiseOnCommittedEvent(),a))}Vi(a){return et(a).get("owner").next(a=>{if(null!==a&&this.pi(a.leaseTimestampMs,5e3)&&!this.Ei(a.ownerId)&&!this.mi(a)&&!(this.Ys||this.allowTabSynchronization&&a.allowTabSynchronization))throw new w(v.FAILED_PRECONDITION,er)})}wi(a){let b={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return et(a).put("owner",b)}static C(){return ae.C()}_i(a){let b=et(a);return b.get("owner").next(a=>this.mi(a)?(q("IndexedDbPersistence","Releasing primary lease."),b.delete("owner")):ac.resolve())}pi(a,b){let c=Date.now();return!(a<c-b)&&(!(a>c)||(r(`Detected an update time that is in the future: ${a} > ${c}`),!1))}ci(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground="visible"===this.document.visibilityState)}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var a;"function"==typeof(null===(a=this.window)|| void 0===a?void 0:a.addEventListener)&&(this.Zs=()=>{this.Ai(),isSafari()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(a){var b;try{let c=null!==(null===(b=this.oi)|| void 0===b?void 0:b.getItem(this.Ti(a)));return q("IndexedDbPersistence",`Client '${a}' ${c?"is":"is not"} zombied in LocalStorage`),c}catch(d){return r("IndexedDbPersistence","Failed to get zombied client id.",d),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(a){r("Failed to set zombie client id.",a)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch(a){}}Ti(a){return`firestore_zombie_${this.persistenceKey}_${a}`}}function et(a){return df(a,"owner")}function eu(a){return df(a,"clientMetadata")}function ev(a,b){let c=a.projectId;return a.isDefaultDatabase||(c+="."+a.database),"firestore/"+b+"/"+c+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A set of changes to what documents are currently in view and out of view for
 * a given query. These changes are sent to the LocalStore by the View (via
 * the SyncEngine) and are used to pin / unpin documents as appropriate.
 */ class ew{constructor(a,b,c,d){this.targetId=a,this.fromCache=b,this.Si=c,this.Di=d}static Ci(a,b){let c=cr(),d=cr();for(let e of b.docChanges)switch(e.type){case 0:c=c.add(e.doc.key);break;case 1:d=d.add(e.doc.key)}return new ew(a,b.fromCache,c,d)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The Firestore query engine.
 *
 * Firestore queries can be executed in three modes. The Query Engine determines
 * what mode to use based on what data is persisted. The mode only determines
 * the runtime complexity of the query - the result set is equivalent across all
 * implementations.
 *
 * The Query engine will use indexed-based execution if a user has configured
 * any index that can be used to execute query (via `setIndexConfiguration()`).
 * Otherwise, the engine will try to optimize the query by re-using a previously
 * persisted query result. If that is not possible, the query will be executed
 * via a full collection scan.
 *
 * Index-based execution is the default when available. The query engine
 * supports partial indexed execution and merges the result from the index
 * lookup with documents that have not yet been indexed. The index evaluation
 * matches the backend's format and as such, the SDK can use indexing for all
 * queries that the backend supports.
 *
 * If no index exists, the query engine tries to take advantage of the target
 * document mapping in the TargetCache. These mappings exists for all queries
 * that have been synced with the backend at least once and allow the query
 * engine to only read documents that previously matched a query plus any
 * documents that were edited after the query was last listened to.
 *
 * There are some cases when this optimization is not guaranteed to produce
 * the same results as full collection scans. In these cases, query
 * processing falls back to full scans. These cases are:
 *
 * - Limit queries where a document that matched the query previously no longer
 *   matches the query.
 *
 * - Limit queries where a document edit may cause the document to sort below
 *   another document that is in the local cache.
 *
 * - Queries that have never been CURRENT or free of limbo documents.
 */ class ex{constructor(){this.xi=!1}initialize(a,b){this.Ni=a,this.indexManager=b,this.xi=!0}getDocumentsMatchingQuery(a,b,c,d){return this.ki(a,b).next(e=>e||this.Mi(a,b,d,c)).next(c=>c||this.Oi(a,b))}ki(a,b){if(bw(b))return ac.resolve(null);let c=bB(b);return this.indexManager.getIndexType(a,c).next(d=>0===d?null:(null!==b.limit&&1===d&&(b=bC(b,null,"F"),c=bB(b)),this.indexManager.getDocumentsMatchingTarget(a,c).next(d=>{let e=cr(...d);return this.Ni.getDocuments(a,e).next(d=>this.indexManager.getMinOffset(a,c).next(c=>{let f=this.Fi(b,d);return this.$i(b,f,e,c.readTime)?this.ki(a,bC(b,null,"F")):this.Bi(a,f,b,c)}))})))}Mi(a,b,c,d){return bw(b)||d.isEqual(L.min())?this.Oi(a,b):this.Ni.getDocuments(a,c).next(e=>{let f=this.Fi(b,e);return this.$i(b,f,c,d)?this.Oi(a,b):(p()<=h.in.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",d.toString(),bF(b)),this.Bi(a,f,b,X(d,-1)))})}Fi(a,b){let c=new av(bI(a));return b.forEach((b,d)=>{bG(a,d)&&(c=c.add(d))}),c}$i(a,b,c,d){if(null===a.limit)return!1;if(c.size!==b.size)return!0;let e="F"===a.limitType?b.last():b.first();return!!e&&(e.hasPendingWrites||e.version.compareTo(d)>0)}Oi(a,b){return p()<=h.in.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",bF(b)),this.Ni.getDocumentsMatchingQuery(a,b,Z.min())}Bi(a,b,c,d){return this.Ni.getDocumentsMatchingQuery(a,c,d).next(a=>(b.forEach(b=>{a=a.insert(b.key,b)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Implements `LocalStore` interface.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */ class ey{constructor(a,b,c,d){this.persistence=a,this.Li=b,this.It=d,this.Ui=new as(H),this.qi=new ch(a=>a9(a),ba),this.Ki=new Map,this.Gi=a.getRemoteDocumentCache(),this.Cs=a.getTargetCache(),this.Ns=a.getBundleCache(),this.Qi(c)}Qi(a){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(a),this.indexManager=this.persistence.getIndexManager(a),this.mutationQueue=this.persistence.getMutationQueue(a,this.indexManager),this.localDocuments=new eg(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(a){return this.persistence.runTransaction("Collect garbage","readwrite-primary",b=>a.collect(b,this.Ui))}}function ez(a,b,c,d){return new ey(a,b,c,d)}async function eA(a,b){var c;let d=c=a;return await d.persistence.runTransaction("Handle user change","readonly",a=>{let c;return d.mutationQueue.getAllMutationBatches(a).next(e=>(c=e,d.Qi(b),d.mutationQueue.getAllMutationBatches(a))).next(b=>{let e=[],f=[],g=cr();for(let h of c)for(let i of(e.push(h.batchId),h.mutations))g=g.add(i.key);for(let j of b)for(let k of(f.push(j.batchId),j.mutations))g=g.add(k.key);return d.localDocuments.getDocuments(a,g).next(a=>({ji:a,removedBatchIds:e,addedBatchIds:f}))})})}function eB(a){var b;let c=b=a;return c.persistence.runTransaction("Get last remote snapshot version","readonly",a=>c.Cs.getLastRemoteSnapshotVersion(a))}function eC(a,b,c){let d=cr(),e=cr();return c.forEach(a=>d=d.add(a)),b.getEntries(a,d).next(a=>{let d=ci;return c.forEach((c,f)=>{let g=a.get(c);f.isFoundDocument()!==g.isFoundDocument()&&(e=e.add(c)),f.isNoDocument()&&f.version.isEqual(L.min())?(b.removeEntry(c,f.readTime),d=d.insert(c,f)):!g.isValidDocument()||f.version.compareTo(g.version)>0||0===f.version.compareTo(g.version)&&g.hasPendingWrites?(b.addEntry(f),d=d.insert(c,f)):q("LocalStore","Ignoring outdated watch update for ",c,". Current version:",g.version," Watch version:",f.version)}),{Wi:d,zi:e}})}function eD(a,b){var c;let d=c=a;return d.persistence.runTransaction("Get next mutation batch","readonly",a=>(void 0===b&&(b=-1),d.mutationQueue.getNextMutationBatchAfterBatchId(a,b)))}function eE(a,b){var c;let d=c=a;return d.persistence.runTransaction("Allocate target","readwrite",a=>{let c;return d.Cs.getTargetData(a,b).next(e=>e?(c=e,ac.resolve(c)):d.Cs.allocateTargetId(a).next(e=>(c=new dj(b,e,0,a.currentSequenceNumber),d.Cs.addTargetData(a,c).next(()=>c))))}).then(a=>{let c=d.Ui.get(a.targetId);return(null===c||a.snapshotVersion.compareTo(c.snapshotVersion)>0)&&(d.Ui=d.Ui.insert(a.targetId,a),d.qi.set(b,a.targetId)),a})}async function eF(a,b,c){var d;let e=d=a,f=e.Ui.get(b);try{c||await e.persistence.runTransaction("Release target",c?"readwrite":"readwrite-primary",a=>e.persistence.referenceDelegate.removeTarget(a,f))}catch(g){if(!ah(g))throw g;q("LocalStore",`Failed to update sequence numbers for target ${b}: ${g}`)}e.Ui=e.Ui.remove(b),e.qi.delete(f.target)}function eG(a,b,c){var d;let e=d=a,f=L.min(),g=cr();return e.persistence.runTransaction("Execute query","readonly",a=>(function(a,b,c){var d;let e=d=a,f=e.qi.get(c);return void 0!==f?ac.resolve(e.Ui.get(f)):e.Cs.getTargetData(b,c)})(e,a,bB(b)).next(b=>{if(b)return f=b.lastLimboFreeSnapshotVersion,e.Cs.getMatchingKeysForTargetId(a,b.targetId).next(a=>{g=a})}).next(()=>e.Li.getDocumentsMatchingQuery(a,b,c?f:L.min(),c?g:cr())).next(a=>(eJ(e,bH(b),a),{documents:a,Hi:g})))}function eH(a,b){var c,d;let e=c=a,f=d=e.Cs,g=e.Ui.get(b);return g?Promise.resolve(g.target):e.persistence.runTransaction("Get target data","readonly",a=>f.se(a,b).next(a=>a?a.target:null))}function eI(a,b){var c;let d=c=a,e=d.Ki.get(b)||L.min();return d.persistence.runTransaction("Get new document changes","readonly",a=>d.Gi.getAllFromCollectionGroup(a,b,X(e,-1),Number.MAX_SAFE_INTEGER)).then(a=>(eJ(d,b,a),a))}function eJ(a,b,c){let d=L.min();c.forEach((a,b)=>{b.readTime.compareTo(d)>0&&(d=b.readTime)}),a.Ki.set(b,d)}async function eK(a,b,c,d){var e,f;let g=e=a,h=cr(),i=ci;for(let j of c){let k=b.Ji(j.metadata.name);j.document&&(h=h.add(k));let l=b.Yi(j);l.setReadTime(b.Xi(j.metadata.readTime)),i=i.insert(k,l)}let m=g.Gi.newChangeBuffer({trackRemovals:!0}),n=await eE(g,(f=d,bB(bv(N.fromString(`__bundle__/docs/${f}`)))));return g.persistence.runTransaction("Apply bundle documents","readwrite",a=>eC(a,m,i).next(b=>(m.apply(a),b)).next(b=>g.Cs.removeMatchingKeysForTargetId(a,n.targetId).next(()=>g.Cs.addMatchingKeys(a,h,n.targetId)).next(()=>g.localDocuments.getLocalViewOfDocuments(a,b.Wi,b.zi)).next(()=>b.Wi)))}async function eL(a,b,c=cr()){var d;let e=await eE(a,bB(dt(b.bundledQuery))),f=d=a;return f.persistence.runTransaction("Save named query","readwrite",a=>{let d=cH(b.readTime);if(e.snapshotVersion.compareTo(d)>=0)return f.Ns.saveNamedQuery(a,b);let g=e.withResumeToken(az.EMPTY_BYTE_STRING,d);return f.Ui=f.Ui.insert(g.targetId,g),f.Cs.updateTargetData(a,g).next(()=>f.Cs.removeMatchingKeysForTargetId(a,e.targetId)).next(()=>f.Cs.addMatchingKeys(a,c,e.targetId)).next(()=>f.Ns.saveNamedQuery(a,b))})}function eM(a,b){return`firestore_clients_${a}_${b}`}function eN(a,b,c){let d=`firestore_mutations_${a}_${c}`;return b.isAuthenticated()&&(d+=`_${b.uid}`),d}function eO(a,b){return`firestore_targets_${a}_${b}`}class eP{constructor(a,b,c,d){this.user=a,this.batchId=b,this.state=c,this.error=d}static Zi(a,b,c){let d=JSON.parse(c),e,f="object"==typeof d&& -1!==["pending","acknowledged","rejected"].indexOf(d.state)&&(void 0===d.error||"object"==typeof d.error);return f&&d.error&&(f="string"==typeof d.error.message&&"string"==typeof d.error.code)&&(e=new w(d.error.code,d.error.message)),f?new eP(a,b,d.state,e):(r("SharedClientState",`Failed to parse mutation state for ID '${b}': ${c}`),null)}tr(){let a={state:this.state,updateTimeMs:Date.now()};return this.error&&(a.error={code:this.error.code,message:this.error.message}),JSON.stringify(a)}}class eQ{constructor(a,b,c){this.targetId=a,this.state=b,this.error=c}static Zi(a,b){let c=JSON.parse(b),d,e="object"==typeof c&& -1!==["not-current","current","rejected"].indexOf(c.state)&&(void 0===c.error||"object"==typeof c.error);return e&&c.error&&(e="string"==typeof c.error.message&&"string"==typeof c.error.code)&&(d=new w(c.error.code,c.error.message)),e?new eQ(a,c.state,d):(r("SharedClientState",`Failed to parse target state for ID '${a}': ${b}`),null)}tr(){let a={state:this.state,updateTimeMs:Date.now()};return this.error&&(a.error={code:this.error.code,message:this.error.message}),JSON.stringify(a)}}class eR{constructor(a,b){this.clientId=a,this.activeTargetIds=b}static Zi(a,b){let c=JSON.parse(b),d="object"==typeof c&&c.activeTargetIds instanceof Array,e=cs;for(let f=0;d&&f<c.activeTargetIds.length;++f)d=aL(c.activeTargetIds[f]),e=e.add(c.activeTargetIds[f]);return d?new eR(a,e):(r("SharedClientState",`Failed to parse client data for instance '${a}': ${b}`),null)}}class eS{constructor(a,b){this.clientId=a,this.onlineState=b}static Zi(a){let b=JSON.parse(a);return"object"==typeof b&& -1!==["Unknown","Online","Offline"].indexOf(b.onlineState)&&"string"==typeof b.clientId?new eS(b.clientId,b.onlineState):(r("SharedClientState",`Failed to parse online state: ${a}`),null)}}class eT{constructor(){this.activeTargetIds=cs}er(a){this.activeTargetIds=this.activeTargetIds.add(a)}nr(a){this.activeTargetIds=this.activeTargetIds.delete(a)}tr(){let a={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(a)}}class eU{constructor(a,b,c,d,e){var f,g,h;this.window=a,this.Hs=b,this.persistenceKey=c,this.sr=d,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new as(H),this.started=!1,this.cr=[];let i=c.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=e,this.ar=eM(this.persistenceKey,this.sr),this.hr=`firestore_sequence_number_${f=this.persistenceKey}`,this.ur=this.ur.insert(this.sr,new eT),this.lr=RegExp(`^firestore_clients_${i}_([^_]*)$`),this.dr=RegExp(`^firestore_mutations_${i}_(\\d+)(?:_(.*))?$`),this._r=RegExp(`^firestore_targets_${i}_(\\d+)$`),this.wr=`firestore_online_state_${g=this.persistenceKey}`,this.mr=`firestore_bundle_loaded_v2_${h=this.persistenceKey}`,this.window.addEventListener("storage",this.ir)}static C(a){return!(!a||!a.localStorage)}async start(){let a=await this.syncEngine.vi();for(let b of a){if(b===this.sr)continue;let c=this.getItem(eM(this.persistenceKey,b));if(c){let d=eR.Zi(b,c);d&&(this.ur=this.ur.insert(d.clientId,d))}}this.gr();let e=this.storage.getItem(this.wr);if(e){let f=this.yr(e);f&&this.pr(f)}for(let g of this.cr)this.rr(g);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(a){this.setItem(this.hr,JSON.stringify(a))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(a){let b=!1;return this.ur.forEach((c,d)=>{d.activeTargetIds.has(a)&&(b=!0)}),b}addPendingMutation(a){this.Tr(a,"pending")}updateMutationState(a,b,c){this.Tr(a,b,c),this.Er(a)}addLocalQueryTarget(a){let b="not-current";if(this.isActiveQueryTarget(a)){let c=this.storage.getItem(eO(this.persistenceKey,a));if(c){let d=eQ.Zi(a,c);d&&(b=d.state)}}return this.Ar.er(a),this.gr(),b}removeLocalQueryTarget(a){this.Ar.nr(a),this.gr()}isLocalQueryTarget(a){return this.Ar.activeTargetIds.has(a)}clearQueryState(a){this.removeItem(eO(this.persistenceKey,a))}updateQueryState(a,b,c){this.Rr(a,b,c)}handleUserChange(a,b,c){b.forEach(a=>{this.Er(a)}),this.currentUser=a,c.forEach(a=>{this.addPendingMutation(a)})}setOnlineState(a){this.br(a)}notifyBundleLoaded(a){this.Pr(a)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(a){let b=this.storage.getItem(a);return q("SharedClientState","READ",a,b),b}setItem(a,b){q("SharedClientState","SET",a,b),this.storage.setItem(a,b)}removeItem(a){q("SharedClientState","REMOVE",a),this.storage.removeItem(a)}rr(a){let b=a;if(b.storageArea===this.storage){if(q("SharedClientState","EVENT",b.key,b.newValue),b.key===this.ar)return void r("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(null!==b.key){if(this.lr.test(b.key)){if(null==b.newValue){let a=this.vr(b.key);return this.Vr(a,null)}{let c=this.Sr(b.key,b.newValue);if(c)return this.Vr(c.clientId,c)}}else if(this.dr.test(b.key)){if(null!==b.newValue){let d=this.Dr(b.key,b.newValue);if(d)return this.Cr(d)}}else if(this._r.test(b.key)){if(null!==b.newValue){let e=this.Nr(b.key,b.newValue);if(e)return this.kr(e)}}else if(b.key===this.wr){if(null!==b.newValue){let f=this.yr(b.newValue);if(f)return this.pr(f)}}else if(b.key===this.hr){let g=function(a){let b=ao.at;if(null!=a)try{var c;let d=JSON.parse(a);"number"==typeof d||u(),b=d}catch(e){r("SharedClientState","Failed to read sequence number from WebStorage",e)}return b}(b.newValue);g!==ao.at&&this.sequenceNumberHandler(g)}else if(b.key===this.mr){let h=this.Mr(b.newValue);await Promise.all(h.map(a=>this.syncEngine.Or(a)))}}}else this.cr.push(b)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(a,b,c){let d=new eP(this.currentUser,a,b,c),e=eN(this.persistenceKey,this.currentUser,a);this.setItem(e,d.tr())}Er(a){let b=eN(this.persistenceKey,this.currentUser,a);this.removeItem(b)}br(a){let b={clientId:this.sr,onlineState:a};this.storage.setItem(this.wr,JSON.stringify(b))}Rr(a,b,c){let d=eO(this.persistenceKey,a),e=new eQ(a,b,c);this.setItem(d,e.tr())}Pr(a){let b=JSON.stringify(Array.from(a));this.setItem(this.mr,b)}vr(a){let b=this.lr.exec(a);return b?b[1]:null}Sr(a,b){let c=this.vr(a);return eR.Zi(c,b)}Dr(a,b){let c=this.dr.exec(a),d=Number(c[1]),e=void 0!==c[2]?c[2]:null;return eP.Zi(new m(e),d,b)}Nr(a,b){let c=this._r.exec(a),d=Number(c[1]);return eQ.Zi(d,b)}yr(a){return eS.Zi(a)}Mr(a){return JSON.parse(a)}async Cr(a){if(a.user.uid===this.currentUser.uid)return this.syncEngine.Fr(a.batchId,a.state,a.error);q("SharedClientState",`Ignoring mutation for non-active user ${a.user.uid}`)}kr(a){return this.syncEngine.$r(a.targetId,a.state,a.error)}Vr(a,b){let c=b?this.ur.insert(a,b):this.ur.remove(a),d=this.Ir(this.ur),e=this.Ir(c),f=[],g=[];return e.forEach(a=>{d.has(a)||f.push(a)}),d.forEach(a=>{e.has(a)||g.push(a)}),this.syncEngine.Br(f,g).then(()=>{this.ur=c})}pr(a){this.ur.get(a.clientId)&&this.onlineStateHandler(a.onlineState)}Ir(a){let b=cs;return a.forEach((a,c)=>{b=b.unionWith(c.activeTargetIds)}),b}}class eV{constructor(){this.Lr=new eT,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(a){}updateMutationState(a,b,c){}addLocalQueryTarget(a){return this.Lr.er(a),this.Ur[a]||"not-current"}updateQueryState(a,b,c){this.Ur[a]=b}removeLocalQueryTarget(a){this.Lr.nr(a)}isLocalQueryTarget(a){return this.Lr.activeTargetIds.has(a)}clearQueryState(a){delete this.Ur[a]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(a){return this.Lr.activeTargetIds.has(a)}start(){return this.Lr=new eT,Promise.resolve()}handleUserChange(a,b,c){}setOnlineState(a){}shutdown(){}writeSequenceNumber(a){}notifyBundleLoaded(a){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eW{qr(a){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // References to `window` are guarded by BrowserConnectivityMonitor.isAvailable()
/* eslint-disable no-restricted-globals */ /**
 * Browser implementation of ConnectivityMonitor.
 */ class eX{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(a){this.Wr.push(a)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){for(let a of(q("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Wr))a(0)}jr(){for(let a of(q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Wr))a(1)}static C(){return"undefined"!=typeof window&& void 0!==window.addEventListener&& void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let eY={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * Maps RPC names to the corresponding REST endpoint name.
 *
 * We use array notation to avoid mangling.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provides a simple helper class that implements the Stream interface to
 * bridge to other implementations that are streams but do not implement the
 * interface. The stream callbacks are invoked with the callOn... methods.
 */ class eZ{constructor(a){this.Hr=a.Hr,this.Jr=a.Jr}Yr(a){this.Xr=a}Zr(a){this.eo=a}onMessage(a){this.no=a}close(){this.Jr()}send(a){this.Hr(a)}so(){this.Xr()}io(a){this.eo(a)}ro(a){this.no(a)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e$ extends class{constructor(a){this.databaseInfo=a,this.databaseId=a.databaseId;let b=a.ssl?"https":"http";this.oo=b+"://"+a.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(a,b,c,d,e){let f=this.ao(a,b);q("RestConnection","Sending: ",f,c);let g={};return this.ho(g,d,e),this.lo(a,f,g,c).then(a=>(q("RestConnection","Received: ",a),a),b=>{throw s("RestConnection",`${a} failed with error: `,b,"url: ",f,"request:",c),b})}fo(a,b,c,d,e,f){return this.co(a,b,c,d,e)}ho(a,b,c){a["X-Goog-Api-Client"]="gl-js/ fire/"+n,a["Content-Type"]="text/plain",this.databaseInfo.appId&&(a["X-Firebase-GMPID"]=this.databaseInfo.appId),b&&b.headers.forEach((b,c)=>a[c]=b),c&&c.headers.forEach((b,c)=>a[c]=b)}ao(a,b){let c=eY[a];return`${this.oo}/v1/${b}:${c}`}}{constructor(a){super(a),this.forceLongPolling=a.forceLongPolling,this.autoDetectLongPolling=a.autoDetectLongPolling,this.useFetchStreams=a.useFetchStreams}lo(a,b,c,d){return new Promise((e,f)=>{let g=new j.JJ;g.listenOnce(j.tw.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case j.jK.NO_ERROR:let b=g.getResponseJson();q("Connection","XHR received:",JSON.stringify(b)),e(b);break;case j.jK.TIMEOUT:q("Connection",'RPC "'+a+'" timed out'),f(new w(v.DEADLINE_EXCEEDED,"Request time out"));break;case j.jK.HTTP_ERROR:let c=g.getStatus();if(q("Connection",'RPC "'+a+'" failed with status:',c,"response text:",g.getResponseText()),c>0){let d=g.getResponseJson().error;if(d&&d.status&&d.message){let h=function(a){let b=a.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(b)>=0?b:v.UNKNOWN}(d.status);f(new w(h,d.message))}else f(new w(v.UNKNOWN,"Server responded with status "+g.getStatus()))}else f(new w(v.UNAVAILABLE,"Connection failed."));break;default:u()}}finally{q("Connection",'RPC "'+a+'" completed.')}});let h=JSON.stringify(d);g.send(b,"POST",h,c,15)})}_o(a,b,c){let e=[this.oo,"/","google.firestore.v1.Firestore","/",a,"/channel"],f=(0,j.UE)(),g=(0,j.FJ)(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(h.xmlHttpFactory=new j.zI({})),this.ho(h.initMessageHeaders,b,c),(0,i.uI)()||(0,i.b$)()||(0,i.d)()||(0,i.w1)()||(0,i.Mn)()||(0,i.ru)()||(h.httpHeadersOverwriteParam="$httpHeaders");let k=e.join("");q("Connection","Creating WebChannel: "+k,h);let l=f.createWebChannel(k,h),m=!1,n=!1,o=new eZ({Hr:a=>{n?q("Connection","Not sending because WebChannel is closed:",a):(m||(q("Connection","Opening WebChannel transport."),l.open(),m=!0),q("Connection","WebChannel sending:",a),l.send(a))},Jr:()=>l.close()}),p=(a,b,c)=>{a.listen(b,a=>{try{c(a)}catch(b){setTimeout(()=>{throw b},0)}})};return p(l,j.ii.EventType.OPEN,()=>{n||q("Connection","WebChannel transport opened.")}),p(l,j.ii.EventType.CLOSE,()=>{n||(n=!0,q("Connection","WebChannel transport closed"),o.io())}),p(l,j.ii.EventType.ERROR,a=>{n||(n=!0,s("Connection","WebChannel transport errored:",a),o.io(new w(v.UNAVAILABLE,"The operation could not be completed")))}),p(l,j.ii.EventType.MESSAGE,a=>{var b,c;if(!n){let e=a.data[0];(c=!!e)||u();let f=e,g=f.error||(null===(b=f[0])|| void 0===b?void 0:b.error);if(g){q("Connection","WebChannel received error:",g);let h=g.status,i=function(a){let b=d[a];if(void 0!==b)return cg(b)}(h),j=g.message;void 0===i&&(i=v.INTERNAL,j="Unknown error status: "+h+" with message "+g.message),n=!0,o.io(new w(i,j)),l.close()}else q("Connection","WebChannel received:",e),o.ro(e)}}),p(g,j.ju.STAT_EVENT,a=>{a.stat===j.kN.PROXY?q("Connection","Detected buffering proxy"):a.stat===j.kN.NOPROXY&&q("Connection","Detected no buffering proxy")}),setTimeout(()=>{o.so()},0),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Initializes the WebChannelConnection for the browser. */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** The Platform's 'window' implementation or null if not available. */ function e_(){return"undefined"!=typeof window?window:null}function e0(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function e1(a){return new cE(a,!0)}class e2{constructor(a,b,c=1e3,d=1.5,e=6e4){this.Hs=a,this.timerId=b,this.wo=c,this.mo=d,this.yo=e,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(a){this.cancel();let b=Math.floor(this.po+this.Ro()),c=Math.max(0,Date.now()-this.To),d=Math.max(0,b-c);d>0&&q("ExponentialBackoff",`Backing off for ${d} ms (base delay: ${this.po} ms, delay with jitter: ${b} ms, last attempt: ${c} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,d,()=>(this.To=Date.now(),a())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */ class e3{constructor(a,b,c,d,e,f,g,h){this.Hs=a,this.Po=c,this.vo=d,this.Vo=e,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=g,this.listener=h,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new e2(a,b)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(a){this.Lo(),this.stream.send(a)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(a,b){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==a?this.xo.reset():b&&b.code===v.RESOURCE_EXHAUSTED?(r(b.toString()),r("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):b&&b.code===v.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=a,await this.listener.Zr(b)}qo(){}auth(){this.state=1;let a=this.Ko(this.So),b=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,c])=>{this.So===b&&this.Go(a,c)},b=>{a(()=>{let a=new w(v.UNKNOWN,"Fetching auth token failed: "+b.message);return this.Qo(a)})})}Go(a,b){let c=this.Ko(this.So);this.stream=this.jo(a,b),this.stream.Yr(()=>{c(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(a=>{c(()=>this.Qo(a))}),this.stream.onMessage(a=>{c(()=>this.onMessage(a))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(a){return q("PersistentStream",`close with error: ${a}`),this.stream=null,this.close(4,a)}Ko(a){return b=>{this.Hs.enqueueAndForget(()=>this.So===a?b():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class e4 extends e3{constructor(a,b,c,d,e,f){super(a,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",b,c,d,f),this.It=e}jo(a,b){return this.Vo._o("Listen",a,b)}onMessage(a){this.xo.reset();let b=function(a,b){let c;if("targetChange"in b){var d,e,f,g,h;b.targetChange;let i="NO_CHANGE"===(d=b.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===d?1:"REMOVE"===d?2:"CURRENT"===d?3:"RESET"===d?4:u(),j=b.targetChange.targetIds||[],k=(e=a,f=b.targetChange.resumeToken,e.gt?(void 0===f||"string"==typeof f||u(),az.fromBase64String(f||"")):(void 0===f||f instanceof Uint8Array||u(),az.fromUint8Array(f||new Uint8Array))),l=b.targetChange.cause,m=l&&function(a){let b=void 0===a.code?v.UNKNOWN:cg(a.code);return new w(b,a.message||"")}(l);c=new cx(i,j,k,m||null)}else if("documentChange"in b){b.documentChange;let n=b.documentChange;n.document,n.document.name,n.document.updateTime;let o=cL(a,n.document.name),p=cH(n.document.updateTime),q=new a4({mapValue:{fields:n.document.fields}}),r=a6.newFoundDocument(o,p,q),s=n.targetIds||[],t=n.removedTargetIds||[];c=new cv(s,t,r.key,r)}else if("documentDelete"in b){b.documentDelete;let x=b.documentDelete;x.document;let y=cL(a,x.document),z=x.readTime?cH(x.readTime):L.min(),A=a6.newNoDocument(y,z),B=x.removedTargetIds||[];c=new cv([],B,A.key,A)}else if("documentRemove"in b){b.documentRemove;let C=b.documentRemove;C.document;let D=cL(a,C.document),E=C.removedTargetIds||[];c=new cv([],E,D,null)}else{if(!("filter"in b))return u();{b.filter;let F=b.filter;F.targetId;let G=F.count||0,H=new ce(G),I=F.targetId;c=new cw(I,H)}}return c}(this.It,a),c=function(a){if(!("targetChange"in a))return L.min();let b=a.targetChange;return b.targetIds&&b.targetIds.length?L.min():b.readTime?cH(b.readTime):L.min()}(a);return this.listener.Wo(b,c)}zo(a){let b={};b.database=cO(this.It),b.addTarget=function(a,b){let c,d=b.target;return(c=bb(d)?{documents:cU(a,d)}:{query:cV(a,d)}).targetId=b.targetId,b.resumeToken.approximateByteSize()>0?c.resumeToken=cG(a,b.resumeToken):b.snapshotVersion.compareTo(L.min())>0&&(c.readTime=cF(a,b.snapshotVersion.toTimestamp())),c}(this.It,a);let c=function(a,b){let c=function(a,b){switch(b){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return u()}}(0,b.purpose);return null==c?null:{"goog-listen-tags":c}}(this.It,a);c&&(b.labels=c),this.Bo(b)}Ho(a){let b={};b.database=cO(this.It),b.removeTarget=a,this.Bo(b)}}class e5 extends e3{constructor(a,b,c,d,e,f){super(a,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",b,c,d,f),this.It=e,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(a,b){return this.Vo._o("Write",a,b)}onMessage(a){var b,c,d,e,f;if(!a.streamToken&&u(),this.lastStreamToken=a.streamToken,this.Jo){this.xo.reset();let g=(c=a.writeResults,d=a.commitTime,c&&c.length>0?(void 0!==d||u(),c.map(a=>{var b,c;let e;return b=a,c=d,(e=b.updateTime?cH(b.updateTime):cH(c)).isEqual(L.min())&&(e=cH(c)),new b$(e,b.transformResults||[])})):[]),h=cH(a.commitTime);return this.listener.Zo(h,g)}return a.writeResults&&0!==a.writeResults.length&&u(),this.Jo=!0,this.listener.tu()}eu(){let a={};a.database=cO(this.It),this.Bo(a)}Xo(a){let b={streamToken:this.lastStreamToken,writes:a.map(a=>cS(this.It,a))};this.Bo(b)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Datastore and its related methods are a wrapper around the external Google
 * Cloud Datastore grpc API, which provides an interface that is more convenient
 * for the rest of the client SDK architecture to consume.
 */ /**
 * An implementation of Datastore that exposes additional state for internal
 * consumption.
 */ class e6 extends class{}{constructor(a,b,c,d){super(),this.authCredentials=a,this.appCheckCredentials=b,this.Vo=c,this.It=d,this.nu=!1}su(){if(this.nu)throw new w(v.FAILED_PRECONDITION,"The client has already been terminated.")}co(a,b,c){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([d,e])=>this.Vo.co(a,b,c,d,e)).catch(a=>{throw"FirebaseError"===a.name?(a.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new w(v.UNKNOWN,a.toString())})}fo(a,b,c,d){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([e,f])=>this.Vo.fo(a,b,c,e,f,d)).catch(a=>{throw"FirebaseError"===a.name?(a.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new w(v.UNKNOWN,a.toString())})}terminate(){this.nu=!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e7{constructor(a,b,c,d,e){this.localStore=a,this.datastore=b,this.asyncQueue=c,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=e,this.mu.qr(a=>{c.enqueueAndForget(async()=>{fg(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(a){var b;let c=b=a;c._u.add(4),await e9(c),c.gu.set("Unknown"),c._u.delete(4),await e8(c)}(this))})}),this.gu=new class{constructor(a,b){this.asyncQueue=a,this.onlineStateHandler=b,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(a){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${a.toString()}`),this.cu("Offline")))}set(a){this.lu(),this.iu=0,"Online"===a&&(this.ou=!1),this.cu(a)}cu(a){a!==this.state&&(this.state=a,this.onlineStateHandler(a))}au(a){let b=`Could not reach Cloud Firestore backend. ${a}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(r(b),this.ou=!1):q("OnlineStateTracker",b)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}(c,d)}}async function e8(a){if(fg(a))for(let b of a.wu)await b(!0)}async function e9(a){for(let b of a.wu)await b(!1)}function fa(a,b){var c;let d=c=a;d.du.has(b.targetId)||(d.du.set(b.targetId,b),ff(d)?fe(d):fy(d).ko()&&fc(d,b))}function fb(a,b){var c;let d=c=a,e=fy(d);d.du.delete(b),e.ko()&&fd(d,b),0===d.du.size&&(e.ko()?e.Fo():fg(d)&&d.gu.set("Unknown"))}function fc(a,b){a.yu.Ot(b.targetId),fy(a).zo(b)}function fd(a,b){a.yu.Ot(b),fy(a).Ho(b)}function fe(a){a.yu=new cz({getRemoteKeysForTarget:b=>a.remoteSyncer.getRemoteKeysForTarget(b),se:b=>a.du.get(b)||null}),fy(a).start(),a.gu.uu()}function ff(a){return fg(a)&&!fy(a).No()&&a.du.size>0}function fg(a){var b;return 0===(b=a)._u.size}function fh(a){a.yu=void 0}async function fi(a){a.du.forEach((b,c)=>{fc(a,b)})}async function fj(a,b){fh(a),ff(a)?(a.gu.hu(b),fe(a)):a.gu.set("Unknown")}async function fk(a,b,c){if(a.gu.set("Online"),b instanceof cx&&2===b.state&&b.cause)try{await async function(a,b){let c=b.cause;for(let d of b.targetIds)a.du.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.du.delete(d),a.yu.removeTarget(d))}(a,b)}catch(d){q("RemoteStore","Failed to remove targets %s: %s ",b.targetIds.join(","),d),await fl(a,d)}else if(b instanceof cv?a.yu.Gt(b):b instanceof cw?a.yu.Yt(b):a.yu.Wt(b),!c.isEqual(L.min()))try{let e=await eB(a.localStore);c.compareTo(e)>=0&&await function(a,b){let c=a.yu.te(b);return c.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){let e=a.du.get(d);e&&a.du.set(d,e.withResumeToken(c.resumeToken,b))}}),c.targetMismatches.forEach(b=>{let c=a.du.get(b);if(!c)return;a.du.set(b,c.withResumeToken(az.EMPTY_BYTE_STRING,c.snapshotVersion)),fd(a,b);let d=new dj(c.target,b,1,c.sequenceNumber);fc(a,d)}),a.remoteSyncer.applyRemoteEvent(c)}(a,c)}catch(f){q("RemoteStore","Failed to raise snapshot:",f),await fl(a,f)}}async function fl(a,b,c){if(!ah(b))throw b;a._u.add(1),await e9(a),a.gu.set("Offline"),c||(c=()=>eB(a.localStore)),a.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await c(),a._u.delete(1),await e8(a)})}function fm(a,b){return b().catch(c=>fl(a,c,b))}async function fn(a){var b;let c=b=a,d=fz(c),e=c.fu.length>0?c.fu[c.fu.length-1].batchId:-1;for(;fo(c);)try{let f=await eD(c.localStore,e);if(null===f){0===c.fu.length&&d.Fo();break}e=f.batchId,fp(c,f)}catch(g){await fl(c,g)}fq(c)&&fr(c)}function fo(a){return fg(a)&&a.fu.length<10}function fp(a,b){a.fu.push(b);let c=fz(a);c.ko()&&c.Yo&&c.Xo(b.mutations)}function fq(a){return fg(a)&&!fz(a).No()&&a.fu.length>0}function fr(a){fz(a).start()}async function fs(a){fz(a).eu()}async function ft(a){let b=fz(a);for(let c of a.fu)b.Xo(c.mutations)}async function fu(a,b,c){let d=a.fu.shift(),e=dh.from(d,b,c);await fm(a,()=>a.remoteSyncer.applySuccessfulWrite(e)),await fn(a)}async function fv(a,b){b&&fz(a).Yo&&await async function(a,b){var c;if(cf(c=b.code)&&c!==v.ABORTED){let d=a.fu.shift();fz(a).Oo(),await fm(a,()=>a.remoteSyncer.rejectFailedWrite(d.batchId,b)),await fn(a)}}(a,b),fq(a)&&fr(a)}async function fw(a,b){var c;let d=c=a;d.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");let e=fg(d);d._u.add(3),await e9(d),e&&d.gu.set("Unknown"),await d.remoteSyncer.handleCredentialChange(b),d._u.delete(3),await e8(d)}async function fx(a,b){var c;let d=c=a;b?(d._u.delete(2),await e8(d)):b||(d._u.add(2),await e9(d),d.gu.set("Unknown"))}function fy(a){return a.pu||(a.pu=function(a,b,c){var d;let e=d=a;return e.su(),new e4(b,e.Vo,e.authCredentials,e.appCheckCredentials,e.It,c)}(a.datastore,a.asyncQueue,{Yr:fi.bind(null,a),Zr:fj.bind(null,a),Wo:fk.bind(null,a)}),a.wu.push(async b=>{b?(a.pu.Oo(),ff(a)?fe(a):a.gu.set("Unknown")):(await a.pu.stop(),fh(a))})),a.pu}function fz(a){return a.Iu||(a.Iu=function(a,b,c){var d;let e=d=a;return e.su(),new e5(b,e.Vo,e.authCredentials,e.appCheckCredentials,e.It,c)}(a.datastore,a.asyncQueue,{Yr:fs.bind(null,a),Zr:fv.bind(null,a),tu:ft.bind(null,a),Zo:fu.bind(null,a)}),a.wu.push(async b=>{b?(a.Iu.Oo(),await fn(a)):(await a.Iu.stop(),a.fu.length>0&&(q("RemoteStore",`Stopping write stream with ${a.fu.length} pending writes`),a.fu=[]))})),a.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */ class fA{constructor(a,b,c,d,e){this.asyncQueue=a,this.timerId=b,this.targetTimeMs=c,this.op=d,this.removalCallback=e,this.deferred=new x,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}static createAndSchedule(a,b,c,d,e){let f=Date.now()+c,g=new fA(a,b,f,d,e);return g.start(c),g}start(a){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),a)}skipDelay(){return this.handleDelayElapsed()}cancel(a){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new w(v.CANCELLED,"Operation cancelled"+(a?": "+a:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(a=>this.deferred.resolve(a))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fB(a,b){if(r("AsyncQueue",`${b}: ${a}`),ah(a))return new w(v.UNAVAILABLE,`${b}: ${a}`);throw a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ class fC{constructor(a){this.comparator=a?(b,c)=>a(b,c)||Q.comparator(b.key,c.key):(a,b)=>Q.comparator(a.key,b.key),this.keyedMap=ck(),this.sortedSet=new as(this.comparator)}static emptySet(a){return new fC(a.comparator)}has(a){return null!=this.keyedMap.get(a)}get(a){return this.keyedMap.get(a)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(a){let b=this.keyedMap.get(a);return b?this.sortedSet.indexOf(b):-1}get size(){return this.sortedSet.size}forEach(a){this.sortedSet.inorderTraversal((b,c)=>(a(b),!1))}add(a){let b=this.delete(a.key);return b.copy(b.keyedMap.insert(a.key,a),b.sortedSet.insert(a,null))}delete(a){let b=this.get(a);return b?this.copy(this.keyedMap.remove(a),this.sortedSet.remove(b)):this}isEqual(a){if(!(a instanceof fC)||this.size!==a.size)return!1;let b=this.sortedSet.getIterator(),c=a.sortedSet.getIterator();for(;b.hasNext();){let d=b.getNext().key,e=c.getNext().key;if(!d.isEqual(e))return!1}return!0}toString(){let a=[];return this.forEach(b=>{a.push(b.toString())}),0===a.length?"DocumentSet ()":"DocumentSet (\n  "+a.join("  \n")+"\n)"}copy(a,b){let c=new fC;return c.comparator=this.comparator,c.keyedMap=a,c.sortedSet=b,c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ class fD{constructor(){this.Tu=new as(Q.comparator)}track(a){let b=a.doc.key,c=this.Tu.get(b);c?0!==a.type&&3===c.type?this.Tu=this.Tu.insert(b,a):3===a.type&&1!==c.type?this.Tu=this.Tu.insert(b,{type:c.type,doc:a.doc}):2===a.type&&2===c.type?this.Tu=this.Tu.insert(b,{type:2,doc:a.doc}):2===a.type&&0===c.type?this.Tu=this.Tu.insert(b,{type:0,doc:a.doc}):1===a.type&&0===c.type?this.Tu=this.Tu.remove(b):1===a.type&&2===c.type?this.Tu=this.Tu.insert(b,{type:1,doc:c.doc}):0===a.type&&1===c.type?this.Tu=this.Tu.insert(b,{type:2,doc:a.doc}):u():this.Tu=this.Tu.insert(b,a)}Eu(){let a=[];return this.Tu.inorderTraversal((b,c)=>{a.push(c)}),a}}class fE{constructor(a,b,c,d,e,f,g,h){this.query=a,this.docs=b,this.oldDocs=c,this.docChanges=d,this.mutatedKeys=e,this.fromCache=f,this.syncStateChanged=g,this.excludesMetadataChanges=h}static fromInitialDocuments(a,b,c,d){let e=[];return b.forEach(a=>{e.push({type:0,doc:a})}),new fE(a,b,fC.emptySet(b),e,c,d,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(a){if(!(this.fromCache===a.fromCache&&this.syncStateChanged===a.syncStateChanged&&this.mutatedKeys.isEqual(a.mutatedKeys)&&bD(this.query,a.query)&&this.docs.isEqual(a.docs)&&this.oldDocs.isEqual(a.oldDocs)))return!1;let b=this.docChanges,c=a.docChanges;if(b.length!==c.length)return!1;for(let d=0;d<b.length;d++)if(b[d].type!==c[d].type||!b[d].doc.isEqual(c[d].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Holds the listeners and the last received ViewSnapshot for a query being
 * tracked by EventManager.
 */ class fF{constructor(){this.Au=void 0,this.listeners=[]}}class fG{constructor(){this.queries=new ch(a=>bE(a),bD),this.onlineState="Unknown",this.Ru=new Set}}async function fH(a,b){var c;let d=c=a,e=b.query,f=!1,g=d.queries.get(e);if(g||(f=!0,g=new fF),f)try{g.Au=await d.onListen(e)}catch(h){let i=fB(h,`Initialization of query '${bF(b.query)}' failed`);return void b.onError(i)}d.queries.set(e,g),g.listeners.push(b),b.bu(d.onlineState),g.Au&&b.Pu(g.Au)&&fL(d)}async function fI(a,b){var c;let d=c=a,e=b.query,f=!1,g=d.queries.get(e);if(g){let h=g.listeners.indexOf(b);h>=0&&(g.listeners.splice(h,1),f=0===g.listeners.length)}if(f)return d.queries.delete(e),d.onUnlisten(e)}function fJ(a,b){var c;let d=c=a,e=!1;for(let f of b){let g=f.query,h=d.queries.get(g);if(h){for(let i of h.listeners)i.Pu(f)&&(e=!0);h.Au=f}}e&&fL(d)}function fK(a,b,c){var d;let e=d=a,f=e.queries.get(b);if(f)for(let g of f.listeners)g.onError(c);e.queries.delete(b)}function fL(a){a.Ru.forEach(a=>{a.next()})}class fM{constructor(a,b,c){this.query=a,this.vu=b,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=c||{}}Pu(a){if(!this.options.includeMetadataChanges){let b=[];for(let c of a.docChanges)3!==c.type&&b.push(c);a=new fE(a.query,a.docs,a.oldDocs,b,a.mutatedKeys,a.fromCache,a.syncStateChanged,!0)}let d=!1;return this.Vu?this.Du(a)&&(this.vu.next(a),d=!0):this.Cu(a,this.onlineState)&&(this.xu(a),d=!0),this.Su=a,d}onError(a){this.vu.error(a)}bu(a){this.onlineState=a;let b=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,a)&&(this.xu(this.Su),b=!0),b}Cu(a,b){if(!a.fromCache)return!0;let c="Offline"!==b;return(!this.options.Nu||!c)&&(!a.docs.isEmpty()||"Offline"===b)}Du(a){if(a.docChanges.length>0)return!0;let b=this.Su&&this.Su.hasPendingWrites!==a.hasPendingWrites;return!(!a.syncStateChanged&&!b)&& !0===this.options.includeMetadataChanges}xu(a){a=fE.fromInitialDocuments(a.query,a.docs,a.mutatedKeys,a.fromCache),this.Vu=!0,this.vu.next(a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A complete element in the bundle stream, together with the byte length it
 * occupies in the stream.
 */ class fN{constructor(a,b){this.payload=a,this.byteLength=b}ku(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Helper to convert objects from bundles to model objects in the SDK.
 */ class fO{constructor(a){this.It=a}Ji(a){return cL(this.It,a)}Yi(a){return a.metadata.exists?cR(this.It,a.document,!1):a6.newNoDocument(this.Ji(a.metadata.name),this.Xi(a.metadata.readTime))}Xi(a){return cH(a)}}/**
 * Returns a `LoadBundleTaskProgress` representing the progress that the loading
 * has succeeded.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fP{constructor(a){this.key=a}}class fQ{constructor(a){this.key=a}}class fR{constructor(a,b){this.query=a,this.Lu=b,this.Uu=null,this.current=!1,this.qu=cr(),this.mutatedKeys=cr(),this.Ku=bI(a),this.Gu=new fC(this.Ku)}get Qu(){return this.Lu}ju(a,b){let c=b?b.Wu:new fD,d=b?b.Gu:this.Gu,e=b?b.mutatedKeys:this.mutatedKeys,f=d,g=!1,h="F"===this.query.limitType&&d.size===this.query.limit?d.last():null,i="L"===this.query.limitType&&d.size===this.query.limit?d.first():null;if(a.inorderTraversal((a,b)=>{let j=d.get(a),k=bG(this.query,b)?b:null,l=!!j&&this.mutatedKeys.has(j.key),m=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations),n=!1;j&&k?j.data.isEqual(k.data)?l!==m&&(c.track({type:3,doc:k}),n=!0):this.zu(j,k)||(c.track({type:2,doc:k}),n=!0,(h&&this.Ku(k,h)>0||i&&0>this.Ku(k,i))&&(g=!0)):!j&&k?(c.track({type:0,doc:k}),n=!0):j&&!k&&(c.track({type:1,doc:j}),n=!0,(h||i)&&(g=!0)),n&&(k?(f=f.add(k),e=m?e.add(a):e.delete(a)):(f=f.delete(a),e=e.delete(a)))}),null!==this.query.limit)for(;f.size>this.query.limit;){let j="F"===this.query.limitType?f.last():f.first();f=f.delete(j.key),e=e.delete(j.key),c.track({type:1,doc:j})}return{Gu:f,Wu:c,$i:g,mutatedKeys:e}}zu(a,b){return a.hasLocalMutations&&b.hasCommittedMutations&&!b.hasLocalMutations}applyChanges(a,b,c){let d=this.Gu;this.Gu=a.Gu,this.mutatedKeys=a.mutatedKeys;let e=a.Wu.Eu();e.sort((a,b)=>(function(a,b){let c=a=>{switch(a){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return u()}};return c(a)-c(b)})(a.type,b.type)||this.Ku(a.doc,b.doc)),this.Hu(c);let f=b?this.Ju():[],g=0===this.qu.size&&this.current?1:0,h=g!==this.Uu;return(this.Uu=g,0!==e.length||h)?{snapshot:new fE(this.query,a.Gu,d,e,a.mutatedKeys,0===g,h,!1),Yu:f}:{Yu:f}}bu(a){return this.current&&"Offline"===a?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new fD,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(a){return!this.Lu.has(a)&&!!this.Gu.has(a)&&!this.Gu.get(a).hasLocalMutations}Hu(a){a&&(a.addedDocuments.forEach(a=>this.Lu=this.Lu.add(a)),a.modifiedDocuments.forEach(a=>{}),a.removedDocuments.forEach(a=>this.Lu=this.Lu.delete(a)),this.current=a.current)}Ju(){if(!this.current)return[];let a=this.qu;this.qu=cr(),this.Gu.forEach(a=>{this.Xu(a.key)&&(this.qu=this.qu.add(a.key))});let b=[];return a.forEach(a=>{this.qu.has(a)||b.push(new fQ(a))}),this.qu.forEach(c=>{a.has(c)||b.push(new fP(c))}),b}Zu(a){this.Lu=a.Hi,this.qu=cr();let b=this.ju(a.documents);return this.applyChanges(b,!0)}tc(){return fE.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.Uu)}}class fS{constructor(a,b,c){this.query=a,this.targetId=b,this.view=c}}class fT{constructor(a){this.key=a,this.ec=!1}}class fU{constructor(a,b,c,d,e,f){this.localStore=a,this.remoteStore=b,this.eventManager=c,this.sharedClientState=d,this.currentUser=e,this.maxConcurrentLimboResolutions=f,this.nc={},this.sc=new ch(a=>bE(a),bD),this.ic=new Map,this.rc=new Set,this.oc=new as(Q.comparator),this.uc=new Map,this.cc=new ei,this.ac={},this.hc=new Map,this.lc=d$.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function fV(a,b){let c=gl(a),d,e,f=c.sc.get(b);if(f)d=f.targetId,c.sharedClientState.addLocalQueryTarget(d),e=f.view.tc();else{let g=await eE(c.localStore,bB(b));c.isPrimaryClient&&fa(c.remoteStore,g);let h=c.sharedClientState.addLocalQueryTarget(g.targetId);e=await fW(c,b,d=g.targetId,"current"===h)}return e}async function fW(a,b,c,d){a.dc=(b,c,d)=>(async function(a,b,c,d){let e=b.view.ju(c);e.$i&&(e=await eG(a.localStore,b.query,!1).then(({documents:a})=>b.view.ju(a,e)));let f=d&&d.targetChanges.get(b.targetId),g=b.view.applyChanges(e,a.isPrimaryClient,f);return f6(a,b.targetId,g.Yu),g.snapshot})(a,b,c,d);let e=await eG(a.localStore,b,!0),f=new fR(b,e.Hi),g=f.ju(e.documents),h=cu.createSynthesizedTargetChangeForCurrentChange(c,d&&"Offline"!==a.onlineState),i=f.applyChanges(g,a.isPrimaryClient,h);f6(a,c,i.Yu);let j=new fS(b,c,f);return a.sc.set(b,j),a.ic.has(c)?a.ic.get(c).push(b):a.ic.set(c,[b]),i.snapshot}async function fX(a,b){var c;let d=c=a,e=d.sc.get(b),f=d.ic.get(e.targetId);if(f.length>1)return d.ic.set(e.targetId,f.filter(a=>!bD(a,b))),void d.sc.delete(b);d.isPrimaryClient?(d.sharedClientState.removeLocalQueryTarget(e.targetId),d.sharedClientState.isActiveQueryTarget(e.targetId)||await eF(d.localStore,e.targetId,!1).then(()=>{d.sharedClientState.clearQueryState(e.targetId),fb(d.remoteStore,e.targetId),f4(d,e.targetId)}).catch(ab)):(f4(d,e.targetId),await eF(d.localStore,e.targetId,!0))}async function fY(a,b,c){let d=gm(a);try{var e,f,g;let h=await function(a,b){var c;let d=c=a,e=K.now(),f=b.reduce((a,b)=>a.add(b.key),cr()),g,h;return d.persistence.runTransaction("Locally write mutations","readwrite",a=>{let c=ci,i=cr();return d.Gi.getEntries(a,f).next(a=>{(c=a).forEach((a,b)=>{b.isValidDocument()||(i=i.add(a))})}).next(()=>d.localDocuments.getOverlayedDocuments(a,c)).next(c=>{g=c;let f=[];for(let h of b){let i=b5(h,g.get(h.key).overlayedDocument);null!=i&&f.push(new b8(h.key,i,a5(i.value.mapValue),b_.exists(!0)))}return d.mutationQueue.addMutationBatch(a,e,f,b)}).next(b=>{h=b;let c=b.applyToLocalDocumentSet(g,i);return d.documentOverlayCache.saveOverlays(a,b.batchId,c)})}).then(()=>({batchId:h.batchId,changes:cl(g)}))}(d.localStore,b),i;d.sharedClientState.addPendingMutation(h.batchId),e=d,f=h.batchId,g=c,(i=e.ac[e.currentUser.toKey()])||(i=new as(H)),i=i.insert(f,g),e.ac[e.currentUser.toKey()]=i,await f9(d,h.changes),await fn(d.remoteStore)}catch(j){let k=fB(j,"Failed to persist write");c.reject(k)}}async function fZ(a,b){var c;let d=c=a;try{let e=await function(a,b){var c;let d=c=a,e=b.snapshotVersion,f=d.Ui;return d.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{let c=d.Gi.newChangeBuffer({trackRemovals:!0});f=d.Ui;let g=[];b.targetChanges.forEach((c,h)=>{var i,j,k;let l=f.get(h);if(!l)return;g.push(d.Cs.removeMatchingKeys(a,c.removedDocuments,h).next(()=>d.Cs.addMatchingKeys(a,c.addedDocuments,h)));let m=l.withSequenceNumber(a.currentSequenceNumber);b.targetMismatches.has(h)?m=m.withResumeToken(az.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,e)),f=f.insert(h,m),i=l,j=m,k=c,(0===i.resumeToken.approximateByteSize()||j.snapshotVersion.toMicroseconds()-i.snapshotVersion.toMicroseconds()>=3e8||k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0)&&g.push(d.Cs.updateTargetData(a,m))});let h=ci,i=cr();if(b.documentUpdates.forEach(c=>{b.resolvedLimboDocuments.has(c)&&g.push(d.persistence.referenceDelegate.updateLimboDocument(a,c))}),g.push(eC(a,c,b.documentUpdates).next(a=>{h=a.Wi,i=a.zi})),!e.isEqual(L.min())){let j=d.Cs.getLastRemoteSnapshotVersion(a).next(b=>d.Cs.setTargetsMetadata(a,a.currentSequenceNumber,e));g.push(j)}return ac.waitFor(g).next(()=>c.apply(a)).next(()=>d.localDocuments.getLocalViewOfDocuments(a,h,i)).next(()=>h)}).then(a=>(d.Ui=f,a))}(d.localStore,b);b.targetChanges.forEach((a,b)=>{var c,e,f;let g=d.uc.get(b);g&&(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1||u(),a.addedDocuments.size>0?g.ec=!0:a.modifiedDocuments.size>0?(e=g.ec)||u():a.removedDocuments.size>0&&(g.ec||u(),g.ec=!1))}),await f9(d,e,b)}catch(f){await ab(f)}}function f$(a,b,c){var d;let e=d=a;if(e.isPrimaryClient&&0===c|| !e.isPrimaryClient&&1===c){let f=[];e.sc.forEach((a,c)=>{let d=c.view.bu(b);d.snapshot&&f.push(d.snapshot)}),function(a,b){var c;let d=c=a;d.onlineState=b;let e=!1;d.queries.forEach((a,c)=>{for(let d of c.listeners)d.bu(b)&&(e=!0)}),e&&fL(d)}(e.eventManager,b),f.length&&e.nc.Wo(f),e.onlineState=b,e.isPrimaryClient&&e.sharedClientState.setOnlineState(b)}}async function f_(a,b,c){var d;let e=d=a;e.sharedClientState.updateQueryState(b,"rejected",c);let f=e.uc.get(b),g=f&&f.key;if(g){let h=new as(Q.comparator);h=h.insert(g,a6.newNoDocument(g,L.min()));let i=cr().add(g),j=new ct(L.min(),new Map,new av(H),h,i);await fZ(e,j),e.oc=e.oc.remove(g),e.uc.delete(b),f8(e)}else await eF(e.localStore,b,!1).then(()=>f4(e,b,c)).catch(ab)}async function f0(a,b){var c;let d=c=a,e=b.batch.batchId;try{let f=await function(a,b){var c;let d=c=a;return d.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{let c=b.batch.keys(),e=d.Gi.newChangeBuffer({trackRemovals:!0});return(function(a,b,c,d){let e=c.batch,f=e.keys(),g=ac.resolve();return f.forEach(a=>{g=g.next(()=>d.getEntry(b,a)).next(b=>{var f;let g=c.docVersions.get(a);null!==g||u(),0>b.version.compareTo(g)&&(e.applyToRemoteDocument(b,c),b.isValidDocument()&&(b.setReadTime(c.commitVersion),d.addEntry(b)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(b,e))})(d,a,b,e).next(()=>e.apply(a)).next(()=>d.mutationQueue.performConsistencyCheck(a)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(a,c,b.batch.batchId)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,function(a){let b=cr();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(b=b.add(a.batch.mutations[c].key));return b}(b))).next(()=>d.localDocuments.getDocuments(a,c))})}(d.localStore,b);f3(d,e,null),f2(d,e),d.sharedClientState.updateMutationState(e,"acknowledged"),await f9(d,f)}catch(g){await ab(g)}}async function f1(a,b,c){var d;let e=d=a;try{let f=await function(a,b){var c;let d=c=a;return d.persistence.runTransaction("Reject batch","readwrite-primary",a=>{let c;return d.mutationQueue.lookupMutationBatch(a,b).next(b=>{var e;return null!==b||u(),c=b.keys(),d.mutationQueue.removeMutationBatch(a,b)}).next(()=>d.mutationQueue.performConsistencyCheck(a)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(a,c,b)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,c)).next(()=>d.localDocuments.getDocuments(a,c))})}(e.localStore,b);f3(e,b,c),f2(e,b),e.sharedClientState.updateMutationState(b,"rejected",c),await f9(e,f)}catch(g){await ab(g)}}function f2(a,b){(a.hc.get(b)||[]).forEach(a=>{a.resolve()}),a.hc.delete(b)}function f3(a,b,c){var d;let e=d=a,f=e.ac[e.currentUser.toKey()];if(f){let g=f.get(b);g&&(c?g.reject(c):g.resolve(),f=f.remove(b)),e.ac[e.currentUser.toKey()]=f}}function f4(a,b,c=null){for(let d of(a.sharedClientState.removeLocalQueryTarget(b),a.ic.get(b)))a.sc.delete(d),c&&a.nc._c(d,c);a.ic.delete(b),a.isPrimaryClient&&a.cc.ls(b).forEach(b=>{a.cc.containsKey(b)||f5(a,b)})}function f5(a,b){a.rc.delete(b.path.canonicalString());let c=a.oc.get(b);null!==c&&(fb(a.remoteStore,c),a.oc=a.oc.remove(b),a.uc.delete(c),f8(a))}function f6(a,b,c){for(let d of c)d instanceof fP?(a.cc.addReference(d.key,b),f7(a,d)):d instanceof fQ?(q("SyncEngine","Document no longer in limbo: "+d.key),a.cc.removeReference(d.key,b),a.cc.containsKey(d.key)||f5(a,d.key)):u()}function f7(a,b){let c=b.key,d=c.path.canonicalString();a.oc.get(c)||a.rc.has(d)||(q("SyncEngine","New document in limbo: "+c),a.rc.add(d),f8(a))}function f8(a){for(;a.rc.size>0&&a.oc.size<a.maxConcurrentLimboResolutions;){let b=a.rc.values().next().value;a.rc.delete(b);let c=new Q(N.fromString(b)),d=a.lc.next();a.uc.set(d,new fT(c)),a.oc=a.oc.insert(c,d),fa(a.remoteStore,new dj(bB(bv(c.path)),d,2,ao.at))}}async function f9(a,b,c){var d;let e=d=a,f=[],g=[],h=[];e.sc.isEmpty()||(e.sc.forEach((a,d)=>{h.push(e.dc(d,b,c).then(a=>{if(a){e.isPrimaryClient&&e.sharedClientState.updateQueryState(d.targetId,a.fromCache?"not-current":"current"),f.push(a);let b=ew.Ci(d.targetId,a);g.push(b)}}))}),await Promise.all(h),e.nc.Wo(f),await async function(a,b){var c;let d=c=a;try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",a=>ac.forEach(b,b=>ac.forEach(b.Si,c=>d.persistence.referenceDelegate.addReference(a,b.targetId,c)).next(()=>ac.forEach(b.Di,c=>d.persistence.referenceDelegate.removeReference(a,b.targetId,c)))))}catch(e){if(!ah(e))throw e;q("LocalStore","Failed to update sequence numbers: "+e)}for(let f of b){let g=f.targetId;if(!f.fromCache){let h=d.Ui.get(g),i=h.snapshotVersion,j=h.withLastLimboFreeSnapshotVersion(i);d.Ui=d.Ui.insert(g,j)}}}(e.localStore,g))}async function ga(a,b){var c,d,e;let f=c=a;if(!f.currentUser.isEqual(b)){q("SyncEngine","User change. New user:",b.toKey());let g=await eA(f.localStore,b);f.currentUser=b,e="'waitForPendingWrites' promise is rejected due to a user change.",(d=f).hc.forEach(a=>{a.forEach(a=>{a.reject(new w(v.CANCELLED,e))})}),d.hc.clear(),f.sharedClientState.handleUserChange(b,g.removedBatchIds,g.addedBatchIds),await f9(f,g.ji)}}function gb(a,b){var c;let d=c=a,e=d.uc.get(b);if(e&&e.ec)return cr().add(e.key);{let f=cr(),g=d.ic.get(b);if(!g)return f;for(let h of g){let i=d.sc.get(h);f=f.unionWith(i.view.Qu)}return f}}async function gc(a,b){var c;let d=c=a,e=await eG(d.localStore,b.query,!0),f=b.view.Zu(e);return d.isPrimaryClient&&f6(d,b.targetId,f.Yu),f}async function gd(a,b){var c;let d=c=a;return eI(d.localStore,b).then(a=>f9(d,a))}async function ge(a,b,c,d){var e;let f=e=a,g=await function(a,b){var c,d;let e=c=a,f=d=e.mutationQueue;return e.persistence.runTransaction("Lookup mutation documents","readonly",a=>f.Tn(a,b).next(b=>b?e.localDocuments.getDocuments(a,b):ac.resolve(null)))}(f.localStore,b);null!==g?("pending"===c?await fn(f.remoteStore):"acknowledged"===c||"rejected"===c?(f3(f,b,d||null),f2(f,b),function(a,b){var c,d;(d=(c=a).mutationQueue).An(b)}(f.localStore,b)):u(),await f9(f,g)):q("SyncEngine","Cannot apply mutation batch with id: "+b)}async function gf(a,b){var c;let d=c=a;if(gl(d),gm(d),!0===b&& !0!==d.fc){let e=d.sharedClientState.getAllActiveQueryTargets(),f=await gg(d,e.toArray());for(let g of(d.fc=!0,await fx(d.remoteStore,!0),f))fa(d.remoteStore,g)}else if(!1===b&& !1!==d.fc){let h=[],i=Promise.resolve();d.ic.forEach((a,b)=>{d.sharedClientState.isLocalQueryTarget(b)?h.push(b):i=i.then(()=>(f4(d,b),eF(d.localStore,b,!0))),fb(d.remoteStore,b)}),await i,await gg(d,h),function(a){var b;let c=b=a;c.uc.forEach((a,b)=>{fb(c.remoteStore,b)}),c.cc.fs(),c.uc=new Map,c.oc=new as(Q.comparator)}(d),d.fc=!1,await fx(d.remoteStore,!1)}}async function gg(a,b,c){var d;let e=d=a,f=[],g=[];for(let h of b){let i,j=e.ic.get(h);if(j&&0!==j.length)for(let k of(i=await eE(e.localStore,bB(j[0])),j)){let l=e.sc.get(k),m=await gc(e,l);m.snapshot&&g.push(m.snapshot)}else{let n=await eH(e.localStore,h);i=await eE(e.localStore,n),await fW(e,gh(n),h,!1)}f.push(i)}return e.nc.Wo(g),f}function gh(a){return bu(a.path,a.collectionGroup,a.orderBy,a.filters,a.limit,"F",a.startAt,a.endAt)}function gi(a){var b,c,d;let e=b=a;return(d=(c=e.localStore).persistence).vi()}async function gj(a,b,c,d){var e;let f=e=a;if(f.fc)return void q("SyncEngine","Ignoring unexpected query state notification.");let g=f.ic.get(b);if(g&&g.length>0)switch(c){case"current":case"not-current":{let h=await eI(f.localStore,bH(g[0])),i=ct.createSynthesizedRemoteEventForCurrentChange(b,"current"===c);await f9(f,h,i);break}case"rejected":await eF(f.localStore,b,!0),f4(f,b,d);break;default:u()}}async function gk(a,b,c){let d=gl(a);if(d.fc){for(let e of b){if(d.ic.has(e)){q("SyncEngine","Adding an already active target "+e);continue}let f=await eH(d.localStore,e),g=await eE(d.localStore,f);await fW(d,gh(f),g.targetId,!1),fa(d.remoteStore,g)}for(let h of c)d.ic.has(h)&&await eF(d.localStore,h,!1).then(()=>{fb(d.remoteStore,h),f4(d,h)}).catch(ab)}}function gl(a){var b;let c=b=a;return c.remoteStore.remoteSyncer.applyRemoteEvent=fZ.bind(null,c),c.remoteStore.remoteSyncer.getRemoteKeysForTarget=gb.bind(null,c),c.remoteStore.remoteSyncer.rejectListen=f_.bind(null,c),c.nc.Wo=fJ.bind(null,c.eventManager),c.nc._c=fK.bind(null,c.eventManager),c}function gm(a){var b;let c=b=a;return c.remoteStore.remoteSyncer.applySuccessfulWrite=f0.bind(null,c),c.remoteStore.remoteSyncer.rejectFailedWrite=f1.bind(null,c),c}class gn{constructor(){this.synchronizeTabs=!1}async initialize(a){this.It=e1(a.databaseInfo.databaseId),this.sharedClientState=this.mc(a),this.persistence=this.gc(a),await this.persistence.start(),this.localStore=this.yc(a),this.gcScheduler=this.Ic(a,this.localStore),this.indexBackfillerScheduler=this.Tc(a,this.localStore)}Ic(a,b){return null}Tc(a,b){return null}yc(a){return ez(this.persistence,new ex,a.initialUser,this.It)}gc(a){return new en(ep.Bs,this.It)}mc(a){return new eV}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class go{async initialize(a,b){this.localStore||(this.localStore=a.localStore,this.sharedClientState=a.sharedClientState,this.datastore=this.createDatastore(b),this.remoteStore=this.createRemoteStore(b),this.eventManager=this.createEventManager(b),this.syncEngine=this.createSyncEngine(b,!a.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>f$(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=ga.bind(null,this.syncEngine),await fx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(a){return new fG}createDatastore(a){var b,c,d,e,f;let g=e1(a.databaseInfo.databaseId),h=(b=a.databaseInfo,new e$(b));return c=a.authCredentials,d=a.appCheckCredentials,e=h,f=g,new e6(c,d,e,f)}createRemoteStore(a){var b,c,d,e,f;return b=this.localStore,c=this.datastore,d=a.asyncQueue,e=a=>f$(this.syncEngine,a,0),f=eX.C()?new eX:new eW,new e7(b,c,d,e,f)}createSyncEngine(a,b){return function(a,b,c,d,e,f,g){let h=new fU(a,b,c,d,e,f);return g&&(h.fc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,a.initialUser,a.maxConcurrentLimboResolutions,b)}terminate(){return async function(a){var b;let c=b=a;q("RemoteStore","RemoteStore shutting down."),c._u.add(5),await e9(c),c.mu.shutdown(),c.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * On web, a `ReadableStream` is wrapped around by a `ByteStreamReader`.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /*
 * A wrapper implementation of Observer<T> that will dispatch events
 * asynchronously. To allow immediate silencing, a mute call is added which
 * causes events scheduled to no longer be raised.
 */ class gp{constructor(a){this.observer=a,this.muted=!1}next(a){this.observer.next&&this.Ac(this.observer.next,a)}error(a){this.observer.error?this.Ac(this.observer.error,a):r("Uncaught Error in snapshot listener:",a)}Rc(){this.muted=!0}Ac(a,b){this.muted||setTimeout(()=>{this.muted||a(b)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */ class gq{constructor(a){this.datastore=a,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(a){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new w(v.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");let b=await async function(a,b){var c;let d=c=a,e=cO(d.It)+"/documents",f={documents:b.map(a=>cK(d.It,a))},g=await d.fo("BatchGetDocuments",e,f,b.length),h=new Map;g.forEach(a=>{var b,c;let e=(b=d.It,"found"in(c=a)?function(a,b){var c;b.found||u(),b.found.name,b.found.updateTime;let d=cL(a,b.found.name),e=cH(b.found.updateTime),f=new a4({mapValue:{fields:b.found.fields}});return a6.newFoundDocument(d,e,f)}(b,c):"missing"in c?function(a,b){var c,d;b.missing||u(),!b.readTime&&u();let e=cL(a,b.missing),f=cH(b.readTime);return a6.newNoDocument(e,f)}(b,c):u());h.set(e.key.toString(),e)});let i=[];return b.forEach(a=>{var b;let c=h.get(a.toString());c||u(),i.push(c)}),i}(this.datastore,a);return b.forEach(a=>this.recordVersion(a)),b}set(a,b){this.write(b.toMutation(a,this.precondition(a))),this.writtenDocs.add(a.toString())}update(a,b){try{this.write(b.toMutation(a,this.preconditionForUpdate(a)))}catch(c){this.lastWriteError=c}this.writtenDocs.add(a.toString())}delete(a){this.write(new cc(a,this.precondition(a))),this.writtenDocs.add(a.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;let a=this.readVersions;this.mutations.forEach(b=>{a.delete(b.key.toString())}),a.forEach((a,b)=>{let c=Q.fromPath(b);this.mutations.push(new cd(c,this.precondition(c)))}),await async function(a,b){var c;let d=c=a,e=cO(d.It)+"/documents",f={writes:b.map(a=>cS(d.It,a))};await d.co("Commit",e,f)}(this.datastore,this.mutations),this.committed=!0}recordVersion(a){let b;if(a.isFoundDocument())b=a.version;else{if(!a.isNoDocument())throw u();b=L.min()}let c=this.readVersions.get(a.key.toString());if(c){if(!b.isEqual(c))throw new w(v.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(a.key.toString(),b)}precondition(a){let b=this.readVersions.get(a.toString());return!this.writtenDocs.has(a.toString())&&b?b.isEqual(L.min())?b_.exists(!1):b_.updateTime(b):b_.none()}preconditionForUpdate(a){let b=this.readVersions.get(a.toString());if(!this.writtenDocs.has(a.toString())&&b){if(b.isEqual(L.min()))throw new w(v.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return b_.updateTime(b)}return b_.exists(!0)}write(a){this.ensureCommitNotCalled(),this.mutations.push(a)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * FirestoreClient is a top-level class that constructs and owns all of the
 * pieces of the client SDK architecture. It is responsible for creating the
 * async queue that is shared by all of the other components in the system.
 */ class gr{constructor(a,b,c,d){this.authCredentials=a,this.appCheckCredentials=b,this.asyncQueue=c,this.databaseInfo=d,this.user=m.UNAUTHENTICATED,this.clientId=G.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(c,async a=>{q("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(c,a=>(q("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(a){this.authCredentialListener=a}setAppCheckTokenChangeListener(a){this.appCheckCredentialListener=a}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let a=new x;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),a.resolve()}catch(b){let c=fB(b,"Failed to shutdown persistence");a.reject(c)}}),a.promise}}async function gs(a,b){a.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");let c=await a.getConfiguration();await b.initialize(c);let d=c.initialUser;a.setCredentialChangeListener(async a=>{d.isEqual(a)||(await eA(b.localStore,a),d=a)}),b.persistence.setDatabaseDeletedListener(()=>a.terminate()),a.offlineComponents=b}async function gt(a,b){a.asyncQueue.verifyOperationInProgress();let c=await gu(a);q("FirestoreClient","Initializing OnlineComponentProvider");let d=await a.getConfiguration();await b.initialize(c,d),a.setCredentialChangeListener(a=>fw(b.remoteStore,a)),a.setAppCheckTokenChangeListener((a,c)=>fw(b.remoteStore,c)),a.onlineComponents=b}async function gu(a){return a.offlineComponents||(q("FirestoreClient","Using default OfflineComponentProvider"),await gs(a,new gn)),a.offlineComponents}async function gv(a){return a.onlineComponents||(q("FirestoreClient","Using default OnlineComponentProvider"),await gt(a,new go)),a.onlineComponents}async function gw(a){let b=await gv(a),c=b.eventManager;return c.onListen=fV.bind(null,b.syncEngine),c.onUnlisten=fX.bind(null,b.syncEngine),c}let gx=new Map;/**
 * An instance map that ensures only one Datastore exists per Firestore
 * instance.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function gy(a,b,c){if(!c)throw new w(v.INVALID_ARGUMENT,`Function ${a}() cannot be called with an empty ${b}.`)}function gz(a){if(!Q.isDocumentKey(a))throw new w(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${a} has ${a.length}.`)}function gA(a){if(Q.isDocumentKey(a))throw new w(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${a} has ${a.length}.`)}function gB(a){if(void 0===a)return"undefined";if(null===a)return"null";if("string"==typeof a)return a.length>20&&(a=`${a.substring(0,20)}...`),JSON.stringify(a);if("number"==typeof a||"boolean"==typeof a)return""+a;if("object"==typeof a){if(a instanceof Array)return"an array";{var b;let c=(b=a).constructor?b.constructor.name:null;return c?`a custom ${c} object`:"an object"}}return"function"==typeof a?"a function":u()}function gC(a,b){if("_delegate"in a&&(a=a._delegate),!(a instanceof b)){if(b.name===a.constructor.name)throw new w(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let c=gB(a);throw new w(v.INVALID_ARGUMENT,`Expected type '${b.name}', but it was: ${c}`)}}return a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // settings() defaults:
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied `FirestoreSettings` object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */ class gD{constructor(a){var b;if(void 0===a.host){if(void 0!==a.ssl)throw new w(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=a.host,this.ssl=null===(b=a.ssl)|| void 0===b||b;if(this.credentials=a.credentials,this.ignoreUndefinedProperties=!!a.ignoreUndefinedProperties,void 0===a.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==a.cacheSizeBytes&&a.cacheSizeBytes<1048576)throw new w(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=a.cacheSizeBytes}this.experimentalForceLongPolling=!!a.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!a.experimentalAutoDetectLongPolling,this.useFetchStreams=!!a.useFetchStreams,function(a,b,c,d){if(!0===b&& !0===d)throw new w(v.INVALID_ARGUMENT,`${a} and ${c} cannot be used together.`)}("experimentalForceLongPolling",a.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",a.experimentalAutoDetectLongPolling)}isEqual(a){return this.host===a.host&&this.ssl===a.ssl&&this.credentials===a.credentials&&this.cacheSizeBytes===a.cacheSizeBytes&&this.experimentalForceLongPolling===a.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===a.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===a.ignoreUndefinedProperties&&this.useFetchStreams===a.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link getFirestore}.
 */ class gE{constructor(a,b,c,d){this._authCredentials=a,this._appCheckCredentials=b,this._databaseId=c,this._app=d,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gD({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(a){if(this._settingsFrozen)throw new w(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gD(a),void 0!==a.credentials&&(this._authCredentials=function(a){if(!a)return new z;switch(a.type){case"gapi":let b=a.client;return new C(b,a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new w(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(a.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(a){let b=gx.get(a);b&&(q("ComponentProvider","Removing Datastore"),gx.delete(a),b.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A `DocumentReference` refers to a document location in a Firestore database
 * and can be used to write, read, or listen to the location. The document at
 * the referenced location may or may not exist.
 */ class gF{constructor(a,b,c){this.converter=b,this._key=c,this.type="document",this.firestore=a}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gH(this.firestore,this.converter,this._key.path.popLast())}withConverter(a){return new gF(this.firestore,a,this._key)}}class gG{constructor(a,b,c){this.converter=b,this._query=c,this.type="query",this.firestore=a}withConverter(a){return new gG(this.firestore,a,this._query)}}class gH extends gG{constructor(a,b,c){super(a,b,bv(c)),this._path=c,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let a=this._path.popLast();return a.isEmpty()?null:new gF(this.firestore,null,new Q(a))}withConverter(a){return new gH(this.firestore,a,this._path)}}function gI(a,b,...c){if(a=(0,i.m9)(a),gy("collection","path",b),a instanceof gE){let d=N.fromString(b,...c);return gA(d),new gH(a,null,d)}{if(!(a instanceof gF||a instanceof gH))throw new w(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let e=a._path.child(N.fromString(b,...c));return gA(e),new gH(a.firestore,null,e)}}function gJ(a,b,...c){if(a=(0,i.m9)(a),1===arguments.length&&(b=G.R()),gy("doc","path",b),a instanceof gE){let d=N.fromString(b,...c);return gz(d),new gF(a,null,new Q(d))}{if(!(a instanceof gF||a instanceof gH))throw new w(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let e=a._path.child(N.fromString(b,...c));return gz(e),new gF(a.firestore,a instanceof gH?a.converter:null,new Q(e))}}class gK extends gE{constructor(a,b,c,d){super(a,b,c,d),this.type="firestore",this._queue=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new e2(this,"async_queue_retry"),this.jc=()=>{let a=e0();a&&q("AsyncQueue","Visibility state changed to "+a.visibilityState),this.xo.bo()};let a=e0();a&&"function"==typeof a.addEventListener&&a.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(a){this.enqueue(a)}enqueueAndForgetEvenWhileRestricted(a){this.Wc(),this.zc(a)}enterRestrictedMode(a){if(!this.Lc){this.Lc=!0,this.Gc=a||!1;let b=e0();b&&"function"==typeof b.removeEventListener&&b.removeEventListener("visibilitychange",this.jc)}}enqueue(a){if(this.Wc(),this.Lc)return new Promise(()=>{});let b=new x;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(a().then(b.resolve,b.reject),b.promise)).then(()=>b.promise)}enqueueRetryable(a){this.enqueueAndForget(()=>(this.Bc.push(a),this.Hc()))}async Hc(){if(0!==this.Bc.length){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(a){if(!ah(a))throw a;q("AsyncQueue","Operation failed with retryable error: "+a)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(a){let b=this.$c.then(()=>(this.Kc=!0,a().catch(a=>{var b;this.qc=a,this.Kc=!1;let c,d=(c=(b=a).message||"",b.stack&&(c=b.stack.includes(b.message)?b.stack:b.message+"\n"+b.stack),c);throw r("INTERNAL UNHANDLED ERROR: ",d),a}).then(a=>(this.Kc=!1,a))));return this.$c=b,b}enqueueAfterDelay(a,b,c){this.Wc(),this.Qc.indexOf(a)> -1&&(b=0);let d=fA.createAndSchedule(this,a,b,c,a=>this.Jc(a));return this.Uc.push(d),d}Wc(){this.qc&&u()}verifyOperationInProgress(){}async Yc(){let a;do await (a=this.$c);while(a!==this.$c)}Xc(a){for(let b of this.Uc)if(b.timerId===a)return!0;return!1}Zc(a){return this.Yc().then(()=>{for(let b of(this.Uc.sort((a,b)=>a.targetTimeMs-b.targetTimeMs),this.Uc))if(b.skipDelay(),"all"!==a&&b.timerId===a)break;return this.Yc()})}ta(a){this.Qc.push(a)}Jc(a){let b=this.Uc.indexOf(a);this.Uc.splice(b,1)}},this._persistenceKey=(null==d?void 0:d.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||gN(this),this._firestoreClient.terminate()}}function gL(a,b){let c="object"==typeof a?a:(0,f.Mq)();return(0,f.qX)(c,"firestore").getImmediate({identifier:"string"==typeof a?a:b||"(default)"})}function gM(a){return a._firestoreClient||gN(a),a._firestoreClient.verifyNotTerminated(),a._firestoreClient}function gN(a){var b,c,d,e,f;let g=a._freezeSettings(),h=(c=a._databaseId,d=(null===(b=a._app)|| void 0===b?void 0:b.options.appId)||"",e=a._persistenceKey,f=g,new aH(c,d,e,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,f.useFetchStreams));a._firestoreClient=new gr(a._authCredentials,a._appCheckCredentials,a._queue,h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a
 * list of field names (referring to a nested field in the document).
 *
 * Create a `FieldPath` by providing field names. If more than one field
 * name is provided, the path will point to a nested field in a document.
 */ class gO{constructor(...a){for(let b=0;b<a.length;++b)if(0===a[b].length)throw new w(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new P(a)}isEqual(a){return this._internalPath.isEqual(a._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An immutable object representing an array of bytes.
 */ class gP{constructor(a){this._byteString=a}static fromBase64String(a){try{return new gP(az.fromBase64String(a))}catch(b){throw new w(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+b)}}static fromUint8Array(a){return new gP(az.fromUint8Array(a))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(a){return this._byteString.isEqual(a._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Sentinel values that can be used when writing document fields with `set()`
 * or `update()`.
 */ class gQ{constructor(a){this._methodName=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An immutable object representing a geographic location in Firestore. The
 * location is represented as latitude/longitude pair.
 *
 * Latitude values are in the range of [-90, 90].
 * Longitude values are in the range of [-180, 180].
 */ class gR{constructor(a,b){if(!isFinite(a)||a< -90||a>90)throw new w(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+a);if(!isFinite(b)||b< -180||b>180)throw new w(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+b);this._lat=a,this._long=b}get latitude(){return this._lat}get longitude(){return this._long}isEqual(a){return this._lat===a._lat&&this._long===a._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(a){return H(this._lat,a._lat)||H(this._long,a._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let gS=/^__.*__$/;class gT{constructor(a,b,c){this.data=a,this.fieldMask=b,this.fieldTransforms=c}toMutation(a,b){return null!==this.fieldMask?new b8(a,this.data,this.fieldMask,b,this.fieldTransforms):new b7(a,this.data,b,this.fieldTransforms)}}class gU{constructor(a,b,c){this.data=a,this.fieldMask=b,this.fieldTransforms=c}toMutation(a,b){return new b8(a,this.data,this.fieldMask,b,this.fieldTransforms)}}function gV(a){switch(a){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw u()}}class gW{constructor(a,b,c,d,e,f){this.settings=a,this.databaseId=b,this.It=c,this.ignoreUndefinedProperties=d,void 0===e&&this.ea(),this.fieldTransforms=e||[],this.fieldMask=f||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(a){return new gW(Object.assign(Object.assign({},this.settings),a),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(a){var b;let c=null===(b=this.path)|| void 0===b?void 0:b.child(a),d=this.sa({path:c,ra:!1});return d.oa(a),d}ua(a){var b;let c=null===(b=this.path)|| void 0===b?void 0:b.child(a),d=this.sa({path:c,ra:!1});return d.ea(),d}ca(a){return this.sa({path:void 0,ra:!0})}aa(a){return hb(a,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(a){return void 0!==this.fieldMask.find(b=>a.isPrefixOf(b))|| void 0!==this.fieldTransforms.find(b=>a.isPrefixOf(b.field))}ea(){if(this.path)for(let a=0;a<this.path.length;a++)this.oa(this.path.get(a))}oa(a){if(0===a.length)throw this.aa("Document fields must not be empty");if(gV(this.na)&&gS.test(a))throw this.aa('Document fields cannot begin and end with "__"')}}class gX{constructor(a,b,c){this.databaseId=a,this.ignoreUndefinedProperties=b,this.It=c||e1(a)}fa(a,b,c,d=!1){return new gW({na:a,methodName:b,la:c,path:P.emptyPath(),ra:!1,ha:d},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function gY(a){let b=a._freezeSettings(),c=e1(a._databaseId);return new gX(a._databaseId,!!b.ignoreUndefinedProperties,c)}function gZ(a,b,c,d,e,f={}){let g=a.fa(f.merge||f.mergeFields?2:0,b,c,e);g7("Data must be an object, but it was:",g,d);let h=g5(d,g),i,j;if(f.merge)i=new ay(g.fieldMask),j=g.fieldTransforms;else if(f.mergeFields){let k=[];for(let l of f.mergeFields){let m=g8(b,l,c);if(!g.contains(m))throw new w(v.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);hc(k,m)||k.push(m)}i=new ay(k),j=g.fieldTransforms.filter(a=>i.covers(a.field))}else i=null,j=g.fieldTransforms;return new gT(new a4(h),i,j)}class g$ extends gQ{_toFieldTransform(a){if(2!==a.na)throw 1===a.na?a.aa(`${this._methodName}() can only appear at the top level of your update data`):a.aa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return a.fieldMask.push(a.path),null}isEqual(a){return a instanceof g$}}function g_(a,b,c){return new gW({na:3,la:b.settings.la,methodName:a._methodName,ra:c},b.databaseId,b.It,b.ignoreUndefinedProperties)}class g0 extends null{_toFieldTransform(a){return new bZ(a.path,new bR)}isEqual(a){return a instanceof g0}}function g1(a,b,c,d){let e=a.fa(1,b,c);g7("Data must be an object, but it was:",e,d);let f=[],g=a4.empty();aq(d,(a,d)=>{let h=ha(b,a,c);d=(0,i.m9)(d);let j=e.ua(h);if(d instanceof g$)f.push(h);else{let k=g4(d,j);null!=k&&(f.push(h),g.set(h,k))}});let h=new ay(f);return new gU(g,h,e.fieldTransforms)}function g2(a,b,c,d,e,f){let g=a.fa(1,b,c),h=[g8(b,d,c)],j=[e];if(f.length%2!=0)throw new w(v.INVALID_ARGUMENT,`Function ${b}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let k=0;k<f.length;k+=2)h.push(g8(b,f[k])),j.push(f[k+1]);let l=[],m=a4.empty();for(let n=h.length-1;n>=0;--n)if(!hc(l,h[n])){let o=h[n],p=j[n];p=(0,i.m9)(p);let q=g.ua(o);if(p instanceof g$)l.push(o);else{let r=g4(p,q);null!=r&&(l.push(o),m.set(o,r))}}let s=new ay(l);return new gU(m,s,g.fieldTransforms)}function g3(a,b,c,d=!1){return g4(c,a.fa(d?4:3,b))}function g4(a,b){if(g6(a=(0,i.m9)(a)))return g7("Unsupported field value:",b,a),g5(a,b);if(a instanceof gQ)return function(a,b){if(!gV(b.na))throw b.aa(`${a._methodName}() can only be used with update() and set()`);if(!b.path)throw b.aa(`${a._methodName}() is not currently supported inside arrays`);let c=a._toFieldTransform(b);c&&b.fieldTransforms.push(c)}(a,b),null;if(void 0===a&&b.ignoreUndefinedProperties)return null;if(b.path&&b.fieldMask.push(b.path),a instanceof Array){if(b.settings.ra&&4!==b.na)throw b.aa("Nested arrays are not supported");return function(a,b){let c=[],d=0;for(let e of a){let f=g4(e,b.ca(d));null==f&&(f={nullValue:"NULL_VALUE"}),c.push(f),d++}return{arrayValue:{values:c}}}(a,b)}return function(a,b){if(null===(a=(0,i.m9)(a)))return{nullValue:"NULL_VALUE"};if("number"==typeof a)return bM(b.It,a);if("boolean"==typeof a)return{booleanValue:a};if("string"==typeof a)return{stringValue:a};if(a instanceof Date){let c=K.fromDate(a);return{timestampValue:cF(b.It,c)}}if(a instanceof K){let d=new K(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:cF(b.It,d)}}if(a instanceof gR)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof gP)return{bytesValue:cG(b.It,a._byteString)};if(a instanceof gF){let e=b.databaseId,f=a.firestore._databaseId;if(!f.isEqual(e))throw b.aa(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${e.projectId}/${e.database}`);return{referenceValue:cI(a.firestore._databaseId||b.databaseId,a._key.path)}}throw b.aa(`Unsupported field value: ${gB(a)}`)}(a,b)}function g5(a,b){let c={};return ar(a)?b.path&&b.path.length>0&&b.fieldMask.push(b.path):aq(a,(a,d)=>{let e=g4(d,b.ia(a));null!=e&&(c[a]=e)}),{mapValue:{fields:c}}}function g6(a){return!("object"!=typeof a||null===a||a instanceof Array||a instanceof Date||a instanceof K||a instanceof gR||a instanceof gP||a instanceof gF||a instanceof gQ)}function g7(a,b,c){var d;if(!g6(c)||"object"!=typeof(d=c)||null===d||Object.getPrototypeOf(d)!==Object.prototype&&null!==Object.getPrototypeOf(d)){let e=gB(c);throw"an object"===e?b.aa(a+" a custom object"):b.aa(a+" "+e)}}function g8(a,b,c){if((b=(0,i.m9)(b))instanceof gO)return b._internalPath;if("string"==typeof b)return ha(a,b);throw hb("Field path arguments must be of type string or ",a,!1,void 0,c)}let g9=RegExp("[~\\*/\\[\\]]");function ha(a,b,c){if(b.search(g9)>=0)throw hb(`Invalid field path (${b}). Paths must not contain '~', '*', '/', '[', or ']'`,a,!1,void 0,c);try{return new gO(...b.split("."))._internalPath}catch(d){throw hb(`Invalid field path (${b}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,a,!1,void 0,c)}}function hb(a,b,c,d,e){let f=d&&!d.isEmpty(),g=void 0!==e,h=`Function ${b}() called with invalid data`;c&&(h+=" (via `toFirestore()`)"),h+=". ";let i="";return(f||g)&&(i+=" (found",f&&(i+=` in field ${d}`),g&&(i+=` in document ${e}`),i+=")"),new w(v.INVALID_ARGUMENT,h+a+i)}function hc(a,b){return a.some(a=>a.isEqual(b))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */ class hd{constructor(a,b,c,d,e){this._firestore=a,this._userDataWriter=b,this._key=c,this._document=d,this._converter=e}get id(){return this._key.path.lastSegment()}get ref(){return new gF(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let a=new he(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(a)}return this._userDataWriter.convertValue(this._document.data.value)}}get(a){if(this._document){let b=this._document.data.field(hf("DocumentSnapshot.get",a));if(null!==b)return this._userDataWriter.convertValue(b)}}}class he extends hd{data(){return super.data()}}function hf(a,b){return"string"==typeof b?ha(a,b):b instanceof gO?b._internalPath:b._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Metadata about a snapshot, describing the state of the snapshot.
 */ class hg{constructor(a,b){this.hasPendingWrites=a,this.fromCache=b}isEqual(a){return this.hasPendingWrites===a.hasPendingWrites&&this.fromCache===a.fromCache}}class hh extends hd{constructor(a,b,c,d,e,f){super(a,b,c,d,f),this._firestore=a,this._firestoreImpl=a,this.metadata=e}exists(){return super.exists()}data(a={}){if(this._document){if(this._converter){let b=new hi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(b,a)}return this._userDataWriter.convertValue(this._document.data.value,a.serverTimestamps)}}get(a,b={}){if(this._document){let c=this._document.data.field(hf("DocumentSnapshot.get",a));if(null!==c)return this._userDataWriter.convertValue(c,b.serverTimestamps)}}}class hi extends hh{data(a={}){return super.data(a)}}class hj{constructor(a,b,c,d){this._firestore=a,this._userDataWriter=b,this._snapshot=d,this.metadata=new hg(d.hasPendingWrites,d.fromCache),this.query=c}get docs(){let a=[];return this.forEach(b=>a.push(b)),a}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(a,b){this._snapshot.docs.forEach(c=>{a.call(b,new hi(this._firestore,this._userDataWriter,c.key,c,new hg(this._snapshot.mutatedKeys.has(c.key),this._snapshot.fromCache),this.query.converter))})}docChanges(a={}){let b=!!a.includeMetadataChanges;if(b&&this._snapshot.excludesMetadataChanges)throw new w(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===b||(this._cachedChanges=function(a,b){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(b=>({type:"added",doc:new hi(a._firestore,a._userDataWriter,b.doc.key,b.doc,new hg(a._snapshot.mutatedKeys.has(b.doc.key),a._snapshot.fromCache),a.query.converter),oldIndex:-1,newIndex:c++}))}{let d=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(a=>b||3!==a.type).map(b=>{let c=new hi(a._firestore,a._userDataWriter,b.doc.key,b.doc,new hg(a._snapshot.mutatedKeys.has(b.doc.key),a._snapshot.fromCache),a.query.converter),e=-1,f=-1;return 0!==b.type&&(e=d.indexOf(b.doc.key),d=d.delete(b.doc.key)),1!==b.type&&(f=(d=d.add(b.doc)).indexOf(b.doc.key)),{type:hk(b.type),doc:c,oldIndex:e,newIndex:f}})}}(this,b),this._cachedChangesIncludeMetadataChanges=b),this._cachedChanges}}function hk(a){switch(a){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return u()}}class hl{}function hm(a,...b){for(let c of b)a=c._apply(a);return a}class hn extends hl{constructor(a,b,c){super(),this.wa=a,this.ma=b,this.ga=c,this.type="where"}_apply(a){let b=gY(a.firestore),c=function(a,b,c,d,e,f,g){let h;if(e.isKeyField()){if("array-contains"===f||"array-contains-any"===f)throw new w(v.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if("in"===f||"not-in"===f){hr(g,f);let i=[];for(let j of g)i.push(hq(d,a,j));h={arrayValue:{values:i}}}else h=hq(d,a,g)}else"in"!==f&&"not-in"!==f&&"array-contains-any"!==f||hr(g,f),h=g3(c,b,g,"in"===f||"not-in"===f);let k=bf.create(e,f,h);return function(a,b){if(b.dt()){let c=by(a);if(null!==c&&!c.isEqual(b.field))throw new w(v.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${c.toString()}' and '${b.field.toString()}'`);let d=bx(a);null!==d&&hs(a,b.field,d)}let e=function(a,b){for(let c of a.filters)if(b.indexOf(c.op)>=0)return c.op;return null}(a,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(b.op));if(null!==e)throw e===b.op?new w(v.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${b.op.toString()}' filter.`):new w(v.INVALID_ARGUMENT,`Invalid query. You cannot use '${b.op.toString()}' filters with '${e.toString()}' filters.`)}(a,k),k}(a._query,"where",b,a.firestore._databaseId,this.wa,this.ma,this.ga);return new gG(a.firestore,a.converter,function(a,b){let c=a.filters.concat([b]);return new bt(a.path,a.collectionGroup,a.explicitOrderBy.slice(),c,a.limit,a.limitType,a.startAt,a.endAt)}(a._query,c))}}function ho(a,b,c){let d=hf("where",a);return new hn(d,b,c)}function hp(a,b,c,d){if(c[0]=getModularInstance(c[0]),c[0]instanceof hd)return function(a,b,c,d,e){if(!d)throw new w(v.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);let f=[];for(let g of bA(a))if(g.field.isKeyField())f.push(aU(b,d.key));else{let h=d.data.field(g.field);if(aE(h))throw new w(v.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+g.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===h){let i=g.field.canonicalString();throw new w(v.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${i}' (used as the orderBy) does not exist.`)}f.push(h)}return new bo(f,e)}(a._query,a.firestore._databaseId,b,c[0]._document,d);{let e=gY(a.firestore);return function(a,b,c,d,e,f){let g=a.explicitOrderBy;if(e.length>g.length)throw new w(v.INVALID_ARGUMENT,`Too many arguments provided to ${d}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let h=[];for(let i=0;i<e.length;i++){let j=e[i];if(g[i].field.isKeyField()){if("string"!=typeof j)throw new w(v.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${d}(), but got a ${typeof j}`);if(!bz(a)&& -1!==j.indexOf("/"))throw new w(v.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${d}() must be a plain document ID, but '${j}' contains a slash.`);let k=a.path.child(N.fromString(j));if(!Q.isDocumentKey(k))throw new w(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${d}() must result in a valid document path, but '${k}' is not because it contains an odd number of segments.`);let l=new Q(k);h.push(aU(b,l))}else{let m=g3(c,d,j);h.push(m)}}return new bo(h,f)}(a._query,a.firestore._databaseId,e,b,c,d)}}function hq(a,b,c){if("string"==typeof(c=(0,i.m9)(c))){if(""===c)throw new w(v.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bz(b)&& -1!==c.indexOf("/"))throw new w(v.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${c}' contains a '/' character.`);let d=b.path.child(N.fromString(c));if(!Q.isDocumentKey(d))throw new w(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${d}' is not because it has an odd number of segments (${d.length}).`);return aU(a,new Q(d))}if(c instanceof gF)return aU(a,c._key);throw new w(v.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gB(c)}.`)}function hr(a,b){if(!Array.isArray(a)||0===a.length)throw new w(v.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${b.toString()}' filters.`);if(a.length>10)throw new w(v.INVALID_ARGUMENT,`Invalid Query. '${b.toString()}' filters support a maximum of 10 elements in the value array.`)}function hs(a,b,c){if(!c.isEqual(b))throw new w(v.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${b.toString()}' and so you must also use '${b.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${c.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Converts Firestore's internal types to the JavaScript types that we expose
 * to the user.
 *
 * @internal
 */ class ht{convertValue(a,b="none"){switch(aO(a)){case 0:return null;case 1:return a.booleanValue;case 2:return aC(a.integerValue||a.doubleValue);case 3:return this.convertTimestamp(a.timestampValue);case 4:return this.convertServerTimestamp(a,b);case 5:return a.stringValue;case 6:return this.convertBytes(aD(a.bytesValue));case 7:return this.convertReference(a.referenceValue);case 8:return this.convertGeoPoint(a.geoPointValue);case 9:return this.convertArray(a.arrayValue,b);case 10:return this.convertObject(a.mapValue,b);default:throw u()}}convertObject(a,b){let c={};return aq(a.fields,(a,d)=>{c[a]=this.convertValue(d,b)}),c}convertGeoPoint(a){return new gR(aC(a.latitude),aC(a.longitude))}convertArray(a,b){return(a.values||[]).map(a=>this.convertValue(a,b))}convertServerTimestamp(a,b){switch(b){case"previous":let c=aF(a);return null==c?null:this.convertValue(c,b);case"estimate":return this.convertTimestamp(aG(a));default:return null}}convertTimestamp(a){let b=aB(a);return new K(b.seconds,b.nanos)}convertDocumentKey(a,b){var c;let d=N.fromString(a);(c=c1(d))||u();let e=new aI(d.get(1),d.get(3)),f=new Q(d.popFirst(5));return e.isEqual(b)||r(`Document ${f} contains a document reference within a different database (${e.projectId}/${e.database}) which is not supported. It will be treated as a reference in the current database (${b.projectId}/${b.database}) instead.`),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Converts custom model object of type T into `DocumentData` by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to `DocumentData`
 * because we want to provide the user with a more specific error message if
 * their `set()` or fails due to invalid data originating from a `toFirestore()`
 * call.
 */ function hu(a,b,c){return a?c&&(c.merge||c.mergeFields)?a.toFirestore(b,c):a.toFirestore(b):b}function hv(a,b){if((a=getModularInstance(a)).firestore!==b)throw new w(v.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return a}class hw extends ht{constructor(a){super(),this.firestore=a}convertBytes(a){return new gP(a)}convertReference(a){let b=this.convertDocumentKey(a,this.firestore._databaseId);return new gF(this.firestore,null,b)}}function hx(a){a=gC(a,gG);let b=gC(a.firestore,gK),c=gM(b),d=new hw(b);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function a(b){if("L"===b.limitType&&0===b.explicitOrderBy.length)throw new w(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(a._query),(function a(b,c,d={}){let e=new x;return b.asyncQueue.enqueueAndForget(async()=>(function(a,b,c,d,e){let f=new gp({next:c=>{b.enqueueAndForget(()=>fI(a,g)),c.fromCache&&"server"===d.source?e.reject(new w(v.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):e.resolve(c)},error:a=>e.reject(a)}),g=new fM(c,f,{includeMetadataChanges:!0,Nu:!0});return fH(a,g)})(await gw(b),b.asyncQueue,c,d,e)),e.promise})(c,a._query).then(c=>new hj(b,d,a,c)))}function hy(a,b,c){a=gC(a,gF);let d=gC(a.firestore,gK),e=hu(a.converter,b,c);return hA(d,[gZ(gY(d),"setDoc",a._key,e,null!==a.converter,c).toMutation(a._key,b_.none())])}function hz(a,b,c,...d){a=gC(a,gF);let e=gC(a.firestore,gK),f=gY(e),g;return g="string"==typeof(b=(0,i.m9)(b))||b instanceof gO?g2(f,"updateDoc",a._key,b,c,d):g1(f,"updateDoc",a._key,b),hA(e,[g.toMutation(a._key,b_.exists(!0))])}function hA(a,b){return function(a,b){let c=new x;return a.asyncQueue.enqueueAndForget(async()=>{var d;return fY(await (d=a,gv(d).then(a=>a.syncEngine)),b,c)}),c.promise}(gM(a),b)}!function(a,b=!0){var c;n=f.Jn,(0,f.Xd)(new g.wA("firestore",(a,{instanceIdentifier:c,options:d})=>{let e=a.getProvider("app").getImmediate(),f=new gK(new A(a.getProvider("auth-internal")),new E(a.getProvider("app-check-internal")),function(a,b){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new w(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new aI(a.options.projectId,b)}(e,c),e);return d=Object.assign({useFetchStreams:b},d),f._setSettings(d),f},"PUBLIC").setMultipleInstances(!0)),(0,f.KN)(l,"3.4.15",void 0),(0,f.KN)(l,"3.4.15","esm2017")}()}}])